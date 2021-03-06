from django.urls import path, include
from .views import ArticleViewSet
from rest_framework import routers
# from .views import ArticleList, ArticleDetails
# article_list, article_details

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='articles')
# router.register(r'articles/<int:pk>', ArticleViewSet, basename='article-detail')

urlpatterns = [
    path('', include(router.urls))
    # path('articles/', ArticleList.as_view()),
    # path('articles/<int:pk>/', ArticleDetails.as_view()),
]
