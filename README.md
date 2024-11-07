# PROJECTE WEB/APP SOCIAL
**Treball realitzat per Marc Penas i Aleix Povedano.**

## Introducció

### Idea General.
- El nostre projecte es basa en fer-ne una aplicació per ajudar en el reaprofitament de zones 'no aprofitades' o 'buides' dins de les diferents poblacions de cada persona.
- Per aconseguir-ho, hem dissenyat una interfície on apareixeríen en un mapa aquells llocs oberts a sugerencies per ser zones sense aprofitar, i on diferents perfils de veïns d'aquella població podrien aportar idees per al reaprofitament i també donar suport a idees d'altres perfils.
- Aquestes idees serien transmeses a la població corresponent segons la popularitat de dita proposta, amb l'objectiu de realitzar-ne un canvi positiu a la zona.

### Plantilles del projecte

#### Els nostres colors:
- **VerdClar** | `#606C38`
- **VerdFosc** | `#283618`
- **Beix** | `#FEFAE0`
- **Marró Highlight1** | `#DDA15E`
- **Marró Highlight2** | `#BC6C25`

![alt text](public/src/image-2.png)

#### Fonts:
- **Ubuntu**

![alt text](public/fonts/Ubuntu/image-3.png)

#### Icons:
<img src="public/icons/logo-fefae0.png" alt="Icon 1" width="50"/> <img src="public/icons/logo-606C38.png" alt="Icon 2" width="50"/> <img src="public/icons/logo-606c38-bc6c25.png" alt="Icon 3" width="50"/> <img src="public/icons/logo-283618.png" alt="Icon 4" width="50"/> <img src="public/icons/logo-bc6c25.png" alt="Icon 5" width="50"/> <img src="public/icons/logo-dda15e.png" alt="Icon 6" width="50"/> <img src="public/icons/logo-dda15e-fefae0.png" alt="Icon 7" width="50"/>
### Decisions preses

#### Display del lloc seleccionat
- La tendència dels dispositius mòbils és que et surtin les dades en vertical, jugant amb displays des de dalt o des de baix (ex: Google Maps).

![alt text](public/src/image.png)
![alt text](public/src/image-1.png)

#### Utilització d'objectes geométrics
- S'han agafat els objectes per fer-los arrodonits. D'aquesta manera l'interfície es fa més amigable entre els objectes de l'aplicació.

![alt text](public/src/imageIniciSessio.png)
![alt text](public/src/imageFinalStepsRegister.png)
![alt text](public/src/votes.png)


#### Display senzill
- Hem pensat que, com menys informació per pantalla, mes cómode seria per l'usuari. Es per això que hi tenim varies pàgines per a una funcionalitat, com es ara el Register.
- ![alt text](public/src/imageFinalStepsRegister.png)

#### Responsivitat.
- La nostra aplicació ha set pensada mes aviat de cara a dispositius mòbils. No obstant, amb la responsivitat hem buscat donar la mateixa experiència tant per pantalles grans com petites, una mica a l'estil Google Maps.
    - En el cas del perfil, register, login i configuracions hem decidit que una responsivitat centrada que es vaigui adaptant tal i com es veu en mòbil era la millor opció.
    - De cara a la pàgina principal, hem decidit que colocar la interfaç principal del menú i la barra de cerca a un costat com fent un menú d'opcions, i després adaptar el mapa a la totalitat de la pantalla donaría una millor experiència a l'usuari, una mica mes inspirat en la interfície de Google Maps en pantalla gran.
