dinero=int(input("ingrese el monto de dinero: "))

if dinero>=200:
    residuo=dinero//200
    dinero=dinero%200
    print ("existen "+ str(residuo)+"billetes de 200")
if dinero>=100:
    residuo=dinero//100
    dinero=dinero%100
    print ("existen "+ str(residuo)+"billetes de 100")
if dinero>=50:
    residuo=dinero//50
    dinero=dinero%50
    print ("existen "+ str(residuo)+"billetes de 50")
if dinero>=20:
    residuo=dinero//20
    dinero=dinero%20
    print ("existen "+ str(residuo)+"billetes de 20")
if dinero>=10:
    residuo=dinero//10
    dinero=dinero%10
    print ("existen "+ str(residuo)+"billetes de 10")
