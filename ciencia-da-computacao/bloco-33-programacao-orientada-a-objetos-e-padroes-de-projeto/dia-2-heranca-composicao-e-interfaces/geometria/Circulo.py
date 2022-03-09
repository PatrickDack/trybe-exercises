from math import pi
from FiguraGeometrica import FiguraGeometrica


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def calc_area(self):
        return pi * (self.raio * self.raio)

    def calc_perimetro(self):
        return 2 * pi * self.raio


circle = Circulo(1)

print(circle.calc_perimetro())
