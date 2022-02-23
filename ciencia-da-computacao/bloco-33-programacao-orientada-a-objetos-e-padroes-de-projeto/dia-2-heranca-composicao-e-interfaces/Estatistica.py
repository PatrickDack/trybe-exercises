from statistics import mean, median, mode
from sqlalchemy import null


class Estatistica:
    def __init__(self):
        self.__media = null
        self.__moda = null
        self.__mediana = null

    def calcula_media(self, list):
        self.list = list
        return mean(list)

    def calcula_mediana(self, list):
        self.list = list
        return median(list)

    def calcula_moda(self, list):
        self.list = list
        return mode(list)


analise = Estatistica()

print(analise.calcula_media([1, 2, 3]))
print(analise.calcula_mediana([3, 1, 2]))
print(analise.calcula_moda([3, 1, 2, 1]))
