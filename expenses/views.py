from rest_framework import viewsets, filters
from .models import Expense
from .serializers import ExpenseSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()
    
    def get_queryset(self):
        categoria = self.request.query_params.get('categoria')
        if categoria:
            return self.queryset.filter(categoria=categoria)
        return self.queryset
