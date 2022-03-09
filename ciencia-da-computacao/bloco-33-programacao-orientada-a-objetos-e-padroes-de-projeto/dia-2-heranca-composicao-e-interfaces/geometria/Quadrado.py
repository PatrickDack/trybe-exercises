from FiguraGeometrica import FiguraGeometrica


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def calc_area(self):
        return self.lado * self.lado

    def calc_perimetro(self):
        return 4 * self.lado


new_square = Quadrado(2)
