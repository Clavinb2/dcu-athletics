from rest_framework import serializers
from .models import Post, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]


class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    tags = serializers.SlugRelatedField(slug_field='name', many=True, queryset=Tag.objects.all(), required=False)

    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        tags = validated_data.pop('tags', [])
        post = super().create(validated_data)
        if tags:
            post.tags.set(self._ensure_tags(tags))
        return post

    def update(self, instance, validated_data):
        tags = validated_data.pop('tags', None)
        post = super().update(instance, validated_data)
        if tags is not None:
            post.tags.set(self._ensure_tags(tags))
        return post

    def _ensure_tags(self, tag_names):
        objs = []
        for name in tag_names:
            obj, _ = Tag.objects.get_or_create(name=name)
            objs.append(obj)
        return objs


