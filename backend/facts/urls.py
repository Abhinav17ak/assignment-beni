from django.urls import path
from .views import fact_list, fact_detail

urlpatterns = [
    path('facts/', fact_list),
    path('facts/<int:id>/', fact_detail),
]
