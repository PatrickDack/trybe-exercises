from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):

    @abstractmethod
    def calc_area(self):
        raise NotImplementedError

    @abstractmethod
    def calc_perimetro(self):
        raise NotImplementedError
