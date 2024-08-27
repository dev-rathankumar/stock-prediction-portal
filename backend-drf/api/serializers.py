from rest_framework import serializers



class StockPredictionSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=20)