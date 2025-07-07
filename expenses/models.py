from django.db import models

class Expense(models.Model):
    CATEGORIAS = [
        ('Alimentação', 'Alimentação'),
        ('Transporte', 'Transporte'),
        ('Lazer', 'Lazer'),
        ('Contas', 'Contas'),
    ]

    valor = models.DecimalField(max_digits=10, decimal_places=2)
    descricao = models.CharField(max_length=255)
    categoria = models.CharField(max_length=50, choices=CATEGORIAS)
    data_registro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.descricao} - R$ {self.valor}'
