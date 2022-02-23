class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99 and self.__ligada:
            self.__volume += 1
            print(self.__volume)
        else:
            print('A Tv está deligada.')

    def diminuir_volume(self):
        if self.__volume > 0 and self.__ligada:
            self.__volume -= 1
            print(self.__volume)
        else:
            print('A Tv está desligada.')

    def modificar_canal(self, numero_canal):
        self.__canal = (
            numero_canal
            if 1 <= numero_canal <= 99 and self.__ligada
            else ValueError("Canal não existe.")
        )
        print(f'Mudou para o canal {self.__canal}')

    def ligar_desligar(self):
        self.__ligada = True if self.__ligada is False else False

        if self.__ligada:
            print('A Tv foi ligada!')
        else:
            print('A Tv foi desligada.')


apple_tv = TV(43)

apple_tv.ligar_desligar()
apple_tv.aumentar_volume()
apple_tv.diminuir_volume()
apple_tv.modificar_canal(99)
