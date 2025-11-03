from rest_framework import viewsets, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.db.models import Q
from .models import Post
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        qs = super().get_queryset()
        user = self.request.user
        if not (user and user.is_authenticated):
            qs = qs.filter(is_published=True)

        # Filters
        search = self.request.query_params.get('search')
        if search:
            qs = qs.filter(Q(title__icontains=search) | Q(content__icontains=search))

        tags = self.request.query_params.get('tags')
        if tags:
            names = [t.strip() for t in tags.split(',') if t.strip()]
            if names:
                qs = qs.filter(tags__name__in=names).distinct()

        return qs

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def auth_ping(request):
    if request.user.is_authenticated:
        return Response({"authenticated": True})
    return Response({"authenticated": False}, status=401)
