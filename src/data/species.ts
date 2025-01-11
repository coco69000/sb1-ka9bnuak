// TypeScript - Classification des espèces

interface Species {
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  conservation: 'Préoccupation-mineure' | 'Vulnérable' | 'Menacé';
  group: 'Salamandres' | 'Tritons' | 'Crapauds' | 'Rainettes' | 'Grenouilles';
  protected?: boolean;
  alternativeName?: string;
  inpnUrl?: string;
}

export const species: Species[] = [
  // Salamandres
  {
    name: "Salamandre tachetée",
    scientificName: "Salamandra salamandra",
    description: "La salamandre tachetée est reconnaissable à sa robe noire tachetée de jaune. Active principalement la nuit, elle fréquente les forêts humides et les zones boisées.",
    imageUrl: "https://th.bing.com/th/id/R.1acf6840604e09c66a219422d525a503?rik=x%2fUaUunqttK81g&riu=http%3a%2f%2fwww.lanaturemoi.com%2fwp-content%2fuploads%2f2020%2f08%2fSalamandre-tachet%c3%a9e-terrestre-B%c3%a9arn-02-768x512.jpg&ehk=%2bhNehKa0iCYMqNphNuANobbXEA35w7PqbLhI7C2IfOA%3d&risl=&pid=ImgRaw&r=0",
        distributionMapUrl: "https://media-hosting.imagekit.io//90902f601a9646fc/92_repartition.png?Expires=1831207160&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2Tw0cmA5K3FmZs05fbhQhP197lu-rawxKgBJv21sg6teyizqTAe5ukW4IIthrsSzWhdgE4C~VtNi1kkok3EU-BaAhC8vhK~VNY-Klk0wBc~pDfQm1JG7~f8yfzjK5N3Ej7saUld4sYGA6XMbxzAUZIIszIUUM93fj0vJWRHOB9zWVclH6eNcgOSW7pz99l8HaOdRSWq0A77R3eiGRn2nUcXFfeUEogYzouwvUbnjJ65sxt3zTEAv7o1b84y2p4W7zVJo4hr8jNfha3BjysCutAbF1ThLv~Hb6Ibd-f4BptYAq-hGNwcXmOqViXvOzwc5PvLhtSJVKb2ZADfVMIpiZA__",

    conservation: "Préoccupation-mineure",
    group: "Salamandres",
    inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  // Tritons
  {
    name: "Triton crêté",
    scientificName: "Triturus cristatus",
    description: "Le plus grand triton d'Europe, caractérisé par sa grande crête dorsale dentelée chez le mâle en période de reproduction.",
    imageUrl: "https://th.bing.com/th/id/OIP.ByfGA1XOVpQMboujIcU3jgHaDY?w=289&h=160&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        distributionMapUrl: "https://media-hosting.imagekit.io//885209e5d71e4c21/139_repartition%20(1).png?Expires=1831207083&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=czGNHxVLir4WI8ZipG1wcRpo2mY4JJvTu7En0iFcsUjUd48uUOGX29VO54ZSR957ruwUXryDE2fUQwEvW5sQQtYBR3mRroPUlPid55m5ySWpTD2c1TQVguQnR7j8QvK-z0rDikBlgjIPolWcIit7xgFpdgDUiQyhpk1lBQ9oa6C2a2akJyLpbhLhOYVraEU8rJgvWLROI4C3cepM2oTXw2J3ha6ZQsH2KpAv1N8hXdOZA9l44ohtx4wTIoItyyJ~Uh3-4~26Zvp33lZaimgpUrGBV-TUzGf7BiMYU34u92l1yb7fiv4JXaG1lWz4B1K40akkxMe5DRhAqHm1NZ4cCQ__",

    conservation: "Vulnérable",
    group: "Tritons",
    protected: true,
    inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Triton alpestre",
    scientificName: "Ichthyosaura alpestris",
    description: "Espèce de triton aux couleurs vives, particulièrement présente en zones montagneuses.",
    imageUrl: "https://infofauna.ch/sites/default/files/styles/grande_image_libre/public/images/media/2022/ichthyosaura-alpestris_andreas-meyer.jpg?itok=LUmeHF4T",
    distributionMapUrl: "https://media-hosting.imagekit.io//67147962b22b49ed/444430_repartition.png?Expires=1831207236&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fi34rZzQF9Me55sFOP9-Qjulpfx09T~n~cLe8C72GMOGeSexNeE7Z5O9RIONA2F40-mx3166ePPcA5CM8RsnyXar3wypO8yRkxCyDuWSzRKjhiixFW3FSpwJAQ1Nv7gh-JApgfz5OJsU7EhwaQM0PuMkXh3cZenW6dx8pA~vMdEr577jPkeJVsp7JbCoWy4yef7kd3KLNSmrcIpDmPo8~1lN70OyT1GAW0zlcJLH34oDROUzI-Ai5zc7kBGr-0gd7jbdtdWijEaJhljBpld8WkdgNtkG4eiNfPbCbqoqYNx4y1cp-7th33Mty9J8J3C3k3YcoaDN58SXMTMSk63-Pw__",
    conservation: "Préoccupation-mineure",
    group: "Tritons",
    protected: true,
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Triton palmé",
    scientificName: "Lissotriton helveticus",
    description: "Le plus petit des tritons européens, reconnaissable à ses pattes arrière palmées chez le mâle en période de reproduction.",
    imageUrl: "https://th.bing.com/th/id/OIP.4IDlXAuQQflSigpRMaLsRgHaE6?w=257&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    distributionMapUrl: "https://media-hosting.imagekit.io//93ca60a8a0d24e01/444432_repartition.png?Expires=1831207331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Djg0aVTyRg~g8z~H2Fryhs6717CNSlusboJ9Fk5oRJwYdQw1x7t0glV5Iu2Xnxi-6K6EsSQZzeM8dJvH68TFCAq13XDwDpahCh~kcVDRqF4aOT3rrl6ae0nrSrTcXaNBWpTIUtqE9~rZpmdsPdfR4kuxVPRXcWNv5d8Fg1OUHgz-I12Vn7ytOFsuJW8fmWZVYG-vjt9l0AKFxuc33KUnG35I44Wp~V8jf8UxM~-OsEqjN21xGi9LZsPyLrGB4-FaIhA4nYiUcszwW-Q~WNout6rX-D1-6spEaQJF-kmo4TtiY3EOBDQIR48Bjhb~zX~r7vGp0R5-atZy6mk8bD61mw__",
    conservation: "Préoccupation-mineure",
    group: "Tritons",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  // Crapauds
  {
    name: "Alyte accoucheur",
    scientificName: "Alytes obstetricans",
    description: "Petit crapaud aux mœurs particulières, le mâle porte les œufs enroulés autour de ses pattes arrière jusqu'à l'éclosion.",
    imageUrl: "https://th.bing.com/th/id/OIP.zLCNnlWRCqaceA9_I1Zq9QHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    distributionMapUrl: "https://media-hosting.imagekit.io//8dc540cb1a46418a/197_repartition.png?Expires=1831207411&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oMyv3awqqlmdtfCkUuuAHlMiDAKa2shcO3RAnedrKwofOf7FdK9Bb5DDCMfwk4t8v~ZbmrZ5uRK4UoXFcPxwJW33QP-EC983osaWQ1PbVJV7qLXP1fQA-20OM~j7qE8jfXHTj44m--V56G8KJZcJdi~4Wd7AIF3EvWNcpSbeuBrnW-i1Jtot5c5EwxujlcNXTEKkC3ztZPrjVyq3bAdRMiX6ZXz54ayeQ1ds7GiAZac51f2PLFI0eomrdMzjBVvEZkNYyyr38CtqB0yrgJx8BZvMXMk62MD3I~v8wdNlesWxJK9K6nVRZZdAd68FAS7KaV9ED2MvxtOXFshluXtJfw__",
    conservation: "Préoccupation-mineure",
    group: "Crapauds",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Sonneur à ventre jaune",
    scientificName: "Bombina variegata",
    description: "Petit crapaud au ventre jaune vif tacheté de noir, rare dans la région. Il fréquente les ornières et mares temporaires en forêt.",
    imageUrl: "https://inpn.mnhn.fr/photos/uploads/webtofs/inpn/4/237164.jpg",
        distributionMapUrl: "https://media-hosting.imagekit.io//e3588c620c1f491a/212_repartition.png?Expires=1831207479&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jC2sQ2UUuUZinTsrpOaAT4E~wWD9V8uXzg7H~ris~1b0bgA2pgb5zc07562uVShOrtRcQTvRLVIBpdUf9Ea-YrVaiCJ9Wma76dzxweGlXrJj6Z3iu0dQLMTpQ4NzGaP0roR9EAuszAOlohf6HUswu0ySx0fuDdeU1laFy9Ac7Z1uac69VN~CxGmjMRpmBC~xqo4vhHYKOEuIkZ7-umuB4NnPAbz90PdySiQglg0OC0m7nXPMnQk8GEHYr9bL9fqrROC~7~qu4gzj~FJeKjGrkm6GD-t58NtgfAWbxDr3jUngZrwgugIoudoHXhrcUJ0ZqeoyRotvEvxihI8l5CWS8Q__",
    conservation: "Menacé",
    group: "Crapauds",
    protected: true,
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Crapaud commun",
    scientificName: "Bufo bufo",
    description: "Grand crapaud trapu, très commun dans les jardins où il est un précieux auxiliaire contre les limaces.",
    imageUrl: "https://th.bing.com/th/id/OIP.gzxrDSr4WfZ68aZLev4pFwHaE7?w=238&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    distributionMapUrl: "https://media-hosting.imagekit.io//a65a50da07654f90/259_repartition.png?Expires=1831206776&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aJqrCenmPkGaF~fDsYXdIYvPCHXAx-kjGvmSDczSNoJLh7f5cZe7YZ0C0TDTe3Us7mkb-v90PudJhB9DpKCkBEwyNrrzYE6Kma08k0BDdKEn7v1z5CB3hg0k6uceM2WrOSZ0DgobK-cR6a7LrWQjFTho2JKwruKc~694nLo0TQu3P5KDfP8rd8rVKO0cT6M9nJsxTPvMY1SFPUfILGO0BUPrJaWixpGTBLgp81iopsP6mTLTFFzEIvHIBHQunYSCllcWzq3YVOtPBFtaPTAZ03aoz3UDbsLHK52Lork1oRN3Nbf33NWLwVb8ggNt09rP-tJn1WwXK6YbPbaEhGGQhw__",
    conservation: "Préoccupation-mineure",
    group: "Crapauds",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Crapaud épineux",
    scientificName: "Bufo spinosus",
    description: "Espèce proche du crapaud commun, caractérisée par sa peau plus verruqueuse.",
    imageUrl: "https://th.bing.com/th/id/OIP.OWTcDDNtU159Eq4McDJnIAHaE6?w=244&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        distributionMapUrl: "https://media-hosting.imagekit.io//63ceab1163674c35/774678_repartition.png?Expires=1831207576&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uJB~ysWTV387sia1cjpBAuYs9aqWrnGbcJYh5H8yhNCOLH4zSNeZOTbrvL7rNLRiAoViQ-joplQt-OPvj0Nq~LqNKyi17PA1mENsEO7Vl19OZZEXmjvFMZzX2ZZgyXmOOHpsfqsBS9DQBJpeCCLVT-5rDynV-NGC~2qOqCE4PUajsWBT-HfZYFnKrjqQj-p2VS9y0OylOe3DSaPvhHQqT4iiEXv78orfNQSQB1h2IEvW9TPSsrDhmluAYP6WethHDFvVQV~NQqfSxgZuU~PS1ShPhraJn6m0H3RBQ4lOfxXctDap3CyyLOpYdYGSG8X7QsVo8l7HEifMzR~m~j15jw__",

    conservation: "Préoccupation-mineure",
    group: "Crapauds",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Crapaud calamite",
    scientificName: "Epidalea calamita",
    description: "Crapaud reconnaissable à sa ligne dorsale claire, aussi appelé crapaud des joncs. Excellent coureur.",
    imageUrl: "https://th.bing.com/th/id/OIP.zwEvCHQ7X-3VN1Co-uUP9wHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.4&pid=1.7",
            distributionMapUrl: "https://media-hosting.imagekit.io//099bac86a22d42bf/459628_repartition.png?Expires=1831207662&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oZH4gCe~rd3MCKGAYEKy5JqN0NjXLEyKuo0YeEeFjybcYLFIFvM03p86ZXyps2JjhhTW65Vki10Aj7jCw0vkCtdIPruQG~qoNTujbdXtrfePtIW7eF5-KaDg7kJp6GkORprzE67CIDjh-i37zNOMAoipHkrgeBzpGK2YmMSPrg2l1SA1h9Mz-I0Tuth6ES3QrkT0V2IpF-QtVHukPDLKxI7vOm28X03IaBMXzKdSe-xe7cnko9ya8MkFPoWLwYnlV-TYgAf6t3yEAvqRZO8sodLOcetPW2v8pbT5PWr~XPf8NgseGWIXnJADXZI17qjWPaWJ5ZjE9osLqA7lD7C23w__",

    conservation: "Préoccupation-mineure",
    group: "Crapauds",
    alternativeName: "Crapaud des joncs",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  // Rainettes
  {
    name: "Rainette verte",
    scientificName: "Hyla arborea",
    description: "Petite grenouille arboricole de couleur verte vive, dotée de ventouses aux extrémités des doigts lui permettant de grimper.",
    imageUrl: "https://th.bing.com/th/id/OIP.sOBy9Ek4SopDNDterg7negHaFH?w=231&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                distributionMapUrl: "https://media-hosting.imagekit.io//8499ac23984446ed/281_repartition.png?Expires=1831207723&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w5vFJ-gkYT2~miWFNi0ICXItBjSRg7MLi-8ZsuRsm74i9u4MidvI0CxJ6alim1TtaZFIv79ijfCnXgJNp3veFIAuK0OcoG0~jHxF0S6H2MnIcqmD0Rp~DGzZdnQDFW0x8xMR7w95n3mwr11aSSTqhLBqSgKSx-Nw4OZQs80Gia-nrMoI2afrv3KhhwKecShYPxo3NXlJM38xpSmGGmIyNb7lkMQxLRpk8m0UlbjvXXu8ykSm0xQb7jujQqtpz8mkCoVNLxZ4LiqJYosyBxVByxANptWxbT65fr6~qS70BVr0cCNwI8CeHfO69Ap-V8-cCFV2WO~6vTTQGm54NweDiw__",

    conservation: "Préoccupation-mineure",
    group: "Rainettes",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  // Grenouilles
  {
    name: "Grenouille rousse",
    scientificName: "Rana temporaria",
    description: "Grenouille brune commune, précoce dans sa période de reproduction qui peut débuter dès janvier.",
    imageUrl: "https://th.bing.com/th/id/OIP.HcNlHcaD4zDZFARe3K28CAHaFe?w=221&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                    distributionMapUrl: "https://media-hosting.imagekit.io//d0306f1bd09e47cd/351_repartition.png?Expires=1831207777&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dzkzrAF0Alzx4jhoWQhTJrERErDqRAuVU~KcAd2OIorXU6Z1ZzXf2rwZ4EfKsFBPnWVVpqSOlp8CsIkEZDuf3JLRtLwozeTTvxw1XvWggMH72MP84kbPdy6XPMSa77p-v4KKIEOQSt~TrVW14pncew6m60G0KIxbUQqU17X9qcz1log1d2PiTaoR9xuzediBpIqyPr1OlncI~TeKyOYtj8fKYgw9s9q5VReLD4tXffpOGOMq9Botz2Rjx01eFODbtH8f4GsgK30fTkGaAsLdV1z-WKOdkROWZGYuyu2BA1OKomo01sY3e5gsjdxbUJl46gV61UKHDWtMUmr0UjHE~Q__",

    conservation: "Préoccupation-mineure",
    group: "Grenouilles",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Grenouille agile",
    scientificName: "Rana dalmatina",
    description: "Grenouille brune élancée, capable de faire des bonds impressionnants grâce à ses longues pattes postérieures.",
    imageUrl: "https://th.bing.com/th/id/OIP.6vEDItRxYprtrofC_5eKgwHaE6?w=254&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                        distributionMapUrl: "https://media-hosting.imagekit.io//02df485af52d48ee/310_repartition.png?Expires=1831207857&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FpxNnzZXBNEJpxdZ9AojlDauaMW7o~BCJtaEy4phKgtoel111BYq3v59dTgDzhTKvlpRVwR9NNIFfdKeJDeC6EOMdVZ1fUTgXngqmwV6qXS87QMIDiNTq8NXYQnYDwHLiJ~moFdZULEJf9soy2h06ThVOLv7Nmy9RAmMRgInbMcmDw5khcYjLnA1SXp~cIvDxt~mreQ9W1IUQJxk6NSjEpOo05rs0WlTVi43TzOdZliAb3RZoKJXShXezFjBwgOqQtGrz4iue~ws5gDnJtgOmszkJE1WSdexQRtWluX4UxZr15g5eTfXwrdOVo4aRGGJEQqeBp55eP-K1WsezB9INA__",

    conservation: "Préoccupation-mineure",
    group: "Grenouilles",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Pélodyte ponctué",
    scientificName: "Pelodytes punctatus",
    description: "Petit amphibien aussi appelé grenouille persillée en raison de sa coloration. Il émet un son grinçant caractéristique.",
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.eReRAuZVCGAtUoUcXpAIdwHaE8&rs=1&pid=ImgDetMain",
                            distributionMapUrl: "https://media-hosting.imagekit.io//7f15a832b4e8465b/252_repartition.png?Expires=1831207917&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nEGgkMOi2xT1MDuXvy0XXskIAc5RTmJsj1Dy9IML-TWQTJpPU5IH7jMnGO2TYVn4f8usGR~rXXFW76crITl4mYG9qx~NVHC8mNspC26KwuiA29nilQhkkS3iE9PByo5HONdaCWxQ2d5dh1d3zXEh4CdkkjYDxoj0znGb289kgedpexw008QBYlTC0RTP6ZAfOEyHjQcbK1naRfP8ewBgz4kanRwyT3ffF-~sG~vknKYeloRNYy8-dzSm2gOLxxlxCTcAlptjSZ9MbHRjEh1SoCjZCyTU2kwiBFDFGqtNOXxyd7cmYmx1aZxvTtuqghryji8tdBxuutak0J2cmKysAg__",

    conservation: "Préoccupation-mineure",
    group: "Grenouilles",
    alternativeName: "Grenouille persillée"
  },
  {
    name: "Grenouille verte",
    scientificName: "Pelophylax kl. esculentus",
    description: "Espèce hybride commune, très aquatique et reconnaissable à son chant puissant.",
    imageUrl: "https://th.bing.com/th/id/OIP.cO_nU6abTI7hYUiLtq8CKwHaEt?w=263&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                                distributionMapUrl: "https://media-hosting.imagekit.io//30639bfddb2d4bfe/444440_repartition.png?Expires=1831207981&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0uE0v6-dXHXJpSXkuW0j8V4Q-~YiMduA4VslflXQ-onbBktYR3AkKAJ9--SGEEqLB6tUSxDWTp3PMLAVYaFbseiWf4Bn1hSbmnVUM0nv1dbiOZh7qLvt553C080kw7dwubuHz8FFJWbuWj1xIl0dC81FoCQnRVGi6UW3EvhJb7kzdPb8FuwVsCuV-52~ZUM~v52n5xV2kyDi-JPFWNC38-57-yF53AWGFLKWb7TgGQ3hCSrL2R2jktxwt29azELjb2AQC2lrK3mzmSWMqePZP~04pMUYqeyqg0xoZQxuE4mNnXG~UNQTHjTuxWAxhKCjK2VxkrOzmANCsmOP5vUhfQ__",

    conservation: "Préoccupation-mineure",
    group: "Grenouilles",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  },
  {
    name: "Grenouille rieuse",
    scientificName: "Rana ridibunda",
    description: "La plus grande des grenouilles vertes, reconnaissable à son chant caractéristique ressemblant à un rire.",
    imageUrl: "https://th.bing.com/th/id/OIP.ttGSo4i8qY4FX70ME08JWQHaF5?w=232&h=185&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                                    distributionMapUrl: "https://media-hosting.imagekit.io//4672665ff5074533/444443_repartition.png?Expires=1831208028&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=n~UJF1R-anJDWw0LfsEbNtkTMJYWQ-ZiDMSOAs8I8EcDi6psQRYQ93bWwzyAv5HyS~Omwq6XOgTo1HOQaCiU4hrxfj0W2FVbks3-dQT48IusTnOd5FJ7H9VrHd7sFyPSEJs1IPoDZocG0olDoyor~Wt9MKQXQ7F2jSZub~B1wdumL2js3JzoZbx41QCpM5Rk8SiHIkI3C2coMuepV5pCMutoF~h266AwDtMVP1vT-XuP2w1iryshEZFRgzvsRmh6oTolNS9CLzg2E20jAP7UgHTWL1Q8NANQ7zeV2zwyEvSBcrM-iZKnBbEp65ObDgVIgW6NYWSnCVHCcSIqsrF0tw__",

    conservation: "Préoccupation-mineure",
    group: "Grenouilles",
        inpnUrl: "https://inpn.mnhn.fr/espece/cd_nom/NUMERO_ESPECE",

  }
];