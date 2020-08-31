const birdsData = [
  [
    {
      id: 1,
      name: 'Желтоголовый королёк',
      species: 'Regulus regulus',
      description:
        'Корольки — самые маленькие птицы Европы. Желтоголовый королёк отличается характерным рисунком верха головы и компактным телосложением; верх серо-зелёный, низ беловатый, с буровато-жёлтым оттенком.',
      image: 'https://live.staticflickr.com/65535/50283157017_89aa6bcd93.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HVLWWLJFGV/XC574300-Roitelet%20huppé%20poligny.mp3',
    },
    {
      id: 2,
      name: 'Буроголовая гаичка',
      species: 'Parus montanus',
      description:
        'Пухляк очень похож на черноголовую гаичку, отличается от неё голосом и некоторыми особенностями окраски: «шапочка» на затылке заходит дальше на зашеек и матовая, а не блестящая; чёрное пятно под клювом шире и напоминает «слюнявчик», имеется светлый участок на крыле, образованный светлыми краями второстепенных маховых перьев.',
      image: 'https://live.staticflickr.com/65535/50283964132_ec59bf31e6.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/URREFGVMYF/XC573533-200704_1495-ampl-cut.mp3',
    },
    {
      id: 3,
      name: 'Зелёный дятел',
      species: '	Picus viridis',
      description:
        'Крупнее седого дятла, оперение жёлто-зелёное, с красной «шапочкой» и красными в чёрной обводке «усами» книзу от глаз. Хвост жёсткий. Лапа типичная для дятлов, зигодактильная (два пальца направлены вперёд, а два назад).',
      image: 'https://live.staticflickr.com/7872/40478115473_2f01a00561.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC575581-2020.07.13_10.06_01.MP3',
    },
    {
      id: 4,
      name: 'Чеглок',
      species: 'Falco subbuteo',
      description:
        'Чеглок – это изящный сокол с длинными крыльями заострённой формы и длинным клиновидным хвостом. Длина тела птицы от 28 до 36 см, размах крыльев составляет 69-84 см, масса находится в пределах от 130 до 340 г.',
      image: 'https://live.staticflickr.com/65535/49825009457_cf361dc867.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/MNQLBOLQFS/XC562623-LärkfalkO_Bornsjön_Maj2020_200527-094817.mp3',
    },
    {
      id: 5,
      name: 'Ремез',
      species: 'Remiz',
      description:
        'Маленькая птичка, внешностью немного похожая на синичку и обыкновенного жулана, называется ремез. Длина тела у этого вида составляет около 12 см, масса достигает 20 г, размах крыльев – 15-18 см.',
      image: 'https://live.staticflickr.com/65535/49979416878_2d2f706a6c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/IJRRKWZVQN/XC572401-Rempen.mp3',
    },
    {
      id: 6,
      name: 'Тупик',
      species: 'Fratercula arctica',
      description:
        'Длина тела атлантического тупика от 30 до 35 см, размах крыльев составляет примерно 50 см. Масса достигает значений от 450 до 500 г. Обычно самцы по размерам больше, чем самочки.',
      image: 'https://live.staticflickr.com/65535/50254264198_306f3080ed.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC479184-2018-08-04%20Borgafjordur%20180804%20Macareux%20moine%20cri%20et%20quemandage.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description:
        'Небольшие и средние по величине птицы (длина тела 18–43 см). Клюв прямой, иногда слегка крючковатый. Ноги сильные. У большинства видов оперение тёмное, коричневое или чёрное с металлическим блеском.',
      image: 'https://live.staticflickr.com/65535/49909433222_dcca3a4017.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TMIGGICBBW/XC585112-Storno gruppo cal (fring) (online-audio-converter.com).mp3',
    },
    {
      id: 2,
      name: 'Кедровка',
      species: 'Nucifraga caryocatactes',
      description:
        'Птица легко узнаётся по буроватому наряду с частыми крупными белыми пестринами, немного напоминающему зимнее оперение обыкновенного скворца: за такую расцветку японцы прозвали кедровку «звёздным вороном». Хвост относительно крыльев короткий, что придаёт птице, особенно летящей, собранный компактный вид.',
      image: 'https://live.staticflickr.com/65535/50222310798_3683a0fbc6.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RVLNPQSYVW/XC574577-2020.07.03.5.24_eurasian%20nutcracker.mp3',
    },
    {
      id: 3,
      name: 'Оляпка',
      species: 'Cinclus cinclus',
      description:
        'Птица имеет компактное тело, плотное и густое оперение, крылья короткие и закруглённые. У взрослых особей горло вплоть до подклювья, зоб и грудь белые, контрастируют с ржаво-бурым брюшком и аспидно-серыми боками Полового диморфизма нет.',
      image: 'https://live.staticflickr.com/65535/50252357511_b650878933.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC569102-Cincle%20plongeur%20juv%20quemandage%20correct.mp3',
    },
    {
      id: 4,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description:
        'Легко узнаваемая птица среднего размера, с хохолком на голове. Как правило, встречается группами, порой тысячными стаями. Общий тон оперения розовато-серый, с более оливковым верхом.',
      image: 'https://live.staticflickr.com/65535/50278649512_4be3e68374.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC541875-seide0650.mp3',
    },
    {
      id: 5,
      name: 'Обыкновенный крапивник',
      species: 'Troglodytes troglodytes',
      description:
        'Крапивниковые птицы — семейство птиц отряда воробьиных. Очень мелкие птицы (длина тела от 8 до 22 см). Окраска верха тела рыжевато-коричневая, брюшко более светлое. Клюв шиловидный, тонкий, острый, иногда чуть изогнут книзу.',
      image: 'https://live.staticflickr.com/65535/50159190942_b477838fe4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LFZNDNTEVP/XC575167-20200712-134820--Kaalupi_tee-MKE600.mp3',
    },
    {
      id: 6,
      name: 'Альпийская завирушка',
      species: 'Prunella collaris',
      description:
        'Завирушки — семейство птиц отряда воробьиных. Небольшие птицы (длина тела 12–18 см). У большинства видов спинная сторона рыжевато-коричневато-серая, с тёмными пестринками, брюшко сероватое.',
      image: 'https://live.staticflickr.com/65535/48126461778_0c7578eeff.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC569172-Accenteur alpin chant 5.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Клёст-еловик',
      species: 'Loxia curvirostra',
      description:
        'Птица с уникальным строением клюва: надклювье и подклювье перекрещиваются. Окраска оперения варьирует в зависимости от пола и возраста. Взрослые самцы кирпично-красного цвета, но до приобретения окончательной окраски проходят несколько промежуточных цветовых фаз: жёлто-зеленоватую и розово-оранжевую. ',
      image: 'https://live.staticflickr.com/65535/50272597831_a327788a8a.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HVLWWLJFGV/XC575836-Bec-croisé chant2.mp3',
    },
    {
      id: 2,
      name: 'Корсиканский поползень',
      species: 'Sitta whiteheadi',
      description:
        'Маленьким поползень с характерной белой «бровью», контрастирующей с «шапочкой» на голове, чёрной у самца и тёмно-серой у самки. Низ бело-рыжий, верх серо-голубой, кончики крайних рулевых перьев хвоста белые. Половой диморфизм выражен слабо.',
      image: 'https://live.staticflickr.com/65535/48494032972_f3624d0640.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YESYDXYEZD/XC543226-sittelle_corse.mp3',
    },
    {
      id: 3,
      name: 'Лазоревка',
      species: 'Cyanistes caeruleus',
      description:
        'Маленькая синица компактного телосложения, при этом изящна, обладает серо-оливковой спиной и лимонно-жёлтым низом, со светлым брюшком, на котором бывает тёмная продольная полоса. ',
      image: 'https://live.staticflickr.com/65535/50285289112_2309fb3e56.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC570150-Mesange%20bleue%20cris%20de%20vol.mp3',
    },
    {
      id: 4,
      name: 'Московка',
      species: 'Periparus ater',
      description:
        'Московка малых размеров, отличается характерным рисунком головы, которым напоминает большую синицу: «шапочка» и горло чёрные, контрастирующие с белыми «щеками», а также с характерным белым пятном на затылке.',
      image: 'https://live.staticflickr.com/65535/50285312721_059529456c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/AGCYXCXXSH/XC575997-coal tit 12 15.mp3',
    },
    {
      id: 5,
      name: 'Мухоловка-пеструшка',
      species: 'Ficedula hypoleuca',
      description:
        'Маленькая изящная птица пропорционального телосложения. У самца верх тела блестяще-чёрного цвета, низ белый; хорошо видны белое пятнышко на лбу и широкий белый участок на крыле, особенно заметный в полёте.',
      image: 'https://live.staticflickr.com/65535/50278183386_ff15bf8a02.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC574217-Ficedula hypoleuca_2020.07.07_10.08_01.MP3',
    },
    {
      id: 6,
      name: 'Обыкновенная горихвостка',
      species: 'Phoenicurus phoenicurus',
      description:
        'Птица мелких размеров с пропорциональным телом. Хвост рыжий. У самца грудь, хвост, поясница и подкрылья оранжевые, а спина, крылья и верх головы серого металлического цвета; горло и щёки чёрные; брюшко и лоб белые.',
      image: 'https://live.staticflickr.com/65535/50281348002_33c19f5af1.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/URREFGVMYF/XC573530-200626_1490-ampl-cut.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Каменка',
      species: 'Oenanthe',
      description:
        'Каменка относится к сегменту птиц среднего размера — ее длина достигает 15 см, вес — от 22 до 28 грамм. Размах крыльев составляет 26-32 см. Цвет оперения — преимущественно серый, зато между родами наблюдается ярко выраженный половой диморфизм.',
      image: 'https://live.staticflickr.com/65535/49473756306_b781f6bbb6.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC584371-Traquet motteu tek en vol +.mp3',
    },
    {
      id: 2,
      name: 'Чечетка',
      species: 'Acanthis flammea',
      description:
        'Длина их тела составляет в среднем 12-15 см, размах крыльев от 20 до 25 см. Масса может достигать 20 г. Окрас оперения на спинке у самцов буровато-серого цвета. Яркими красными пятнами украшены лоб и темя птиц.',
      image: 'https://live.staticflickr.com/65535/50208087966_e3a6096730.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TQCWZTAINA/XC552770-B18h16m56s02jun2010_xenocanto_edit_bp100.mp3',
    },
    {
      id: 3,
      name: 'Снегирь',
      species: 'Pyrrhula',
      description:
        'Маленькие певчие птички из семейства вьюрковых – снегири – на латыни называются Pyrrhula, что переводится как «огненный», и указывает на яркую особенную окраску их оперения.',
      image: 'https://live.staticflickr.com/65535/50283860793_8c9c824349.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SPMWIWZKKC/XC578436-200719_2743_BRBU.mp3',
    },
    {
      id: 4,
      name: 'Чечевица',
      species: 'Carpodacus',
      description:
        'Род чечевицы объединяет 22 вида птиц семейства вьюрковые. Все они отличаются ярким мелодичным пением и характерным оперением самцов. Чечевицы также известны под названием «красные воробьи», в первую очередь, из-за схожести их размеров. ',
      image: 'https://live.staticflickr.com/65535/49995110247_f32aa1277c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LHKLVTXBWH/XC575827-Ciuffolotto scarlatto 00,55 Sergio.mp3',
    },
    {
      id: 5,
      name: 'Щур',
      species: 'Bombycilla garrulus',
      description:
        'Щур – певчая птица средних размеров семейства вьюрковых. Взрослые особи достигают 25 см в длину, с размахом крыльев 35-37 см, и весом тела от 50 до 60 г.',
      image: 'https://live.staticflickr.com/65535/49878171193_22ab0fda93.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YQNGFTBRRT/XC500990-NOPO_BlackCyn_3Sep2014_Harter_02.mp3',
    },
    {
      id: 6,
      name: 'Чекан',
      species: 'Saxicola',
      description:
        'Чеканы – род птиц семейства дроздовых. По размерам эти птички меньше, чем домовые воробьи, с коротким хвостом, и очень подвижны. Длина их тела – около 15 см, масса достигает 20 г. Особенность поведения чекана – привычка подергивать хвостом и как бы «кланяться».',
      image: 'https://live.staticflickr.com/65535/50279497551_01a3ce2106.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC576280-braunk0626.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Тювик',
      species: 'Accipiter',
      description:
        'Внешне тювик напоминает перепелятника, но отличается от последнего более крупными размерами, характером окраса оперения, короткими сильными лапами и пальцами. Длина тела тювика в среднем от 30 до 38 см, размах крыльев составляет 63-80 см, вес находится в пределах 150-250 г.',
      image: 'https://live.staticflickr.com/65535/50277461927_41e4e308bb.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/EDKHYGNKZQ/XC579302-Mi video1.mp3',
    },
    {
      id: 2,
      name: 'Бородач',
      species: 'Gypaetus barbatus',
      description:
        'Длина тела птицы от 95 до 125 см, масса находится в пределах 4,5-7,5 кг, длина крыла от 75 до 80 см, размах крыльев составляет 275-308 см. У взрослой птицы окрас оперения головы, шеи и живота светлый, от белого до ярко-рыжего; около глаз и на уздечке расположены чёрные пятна; под клювом находится характерный пучок чёрных перьев, которые напоминают бородку.',
      image: 'https://live.staticflickr.com/65535/50267722511_360b223dd2.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC569323-Gypaete%20barbu%20adulte%20et%20jeune%20+.mp3',
    },
    {
      id: 3,
      name: 'Химахима',
      species: 'Milvago chimachima',
      description:
        'Химахима – птица средних размеров. Длина тела химахимы от 40 до 46 см, размах крыльев составляет 81-95 см. По размерам тела самки обычно немного крупнее самцов. Так, вес самцов в среднем достигает 300 г (235-329 г), а у самок – до 330 г (297-364 г).',
      image: 'https://live.staticflickr.com/65535/50131469307_871db37aa4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC570848-Yellow-headed Caracara, Mana Dulce, 200622-019.mp3',
    },
    {
      id: 4,
      name: 'Орлан',
      species: '	Haliaeetus',
      description:
        'Орлан – массивная, величественная птица. Длина тела у нее от 70 до 110 см, размах крыльев составляет 2-2,5 м, масса находится в пределах от 3 до 7 кг. Клюв крупный, крючковатый, хвост и крылья широкие, ноги сильные, без оперения, с изогнутыми длинными когтями.',
      image: 'https://live.staticflickr.com/1915/31683693388_7ef247b9cf.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YBXAQXNZZP/XC503707-Goa%20Odxel%20White-bellied%20Sea%20Eagle%2022-Oct-2019%20AAM%20E.mp3',
    },
    {
      id: 5,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description:
        'Сапсан является крупным соколом с длиной тела от 34 до 50 см, размахом крыльев от 80 до 120 см. Самки крупнее, чем самцы: их масса от 910 до 1500 г, а самцы обычно на треть меньше, их масса от 440 до 750 г. Окрас оперения у самцов и самок одинаковый.',
      image: 'https://live.staticflickr.com/65535/50254096698_2e0ce65481.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RFRTVEHIZX/XC582320-200723_Peregrine_adult calls_A_OC.mp3',
    },
    {
      id: 6,
      name: 'Поморник',
      species: 'Stercorarius',
      description:
        'Всех поморниковых отличает короткий, большой клюв, обтянутый кожей. Кончик у него приплюснутый, а основание округлено. Вверху клюв изогнут вниз, как крючок, а снизу есть небольшое углубление. Когти у птицы острые и выгнутые. Крылья длинные заостренные. Хвост округлой формы.',
      image: 'https://live.staticflickr.com/65535/50274538676_2815934616.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/Chilean Skua2011-11-2-1.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Топорик',
      species: 'Fratercula cirrhata',
      description:
        'Топорок – птица средних размеров, длина ее тела достигает 40 см, масса от 600 до 800 г. Окрас оперения у топорика однообразный, чёрно-бурого цвета. Щёки окрашены в белый цвет, за глазами расположены пучки длинных перьев желтого цвета.',
      image: 'https://live.staticflickr.com/65535/50051992691_460f03236e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/NAVSCGONZE/Lunde2_Runde_210510.mp3',
    },
    {
      id: 2,
      name: 'Тонкоклювая кайра',
      species: 'Uria aalge',
      description:
        'Кайры – это род морских птиц семейства чистиковые (Alcidae). Два вида представляющие этот рад распространены в северном полушарии. Для гнездования птицы выбирают скалистые побережья. Живут они крупными колониями, образуя вместе с другими видами морских птиц так называемые «птичьи базары».',
      image: 'https://live.staticflickr.com/65535/50283786756_cf09d9c1c8.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YKITMEIRRE/XC312412-160402 Uria aalge Hornøya 009_Tr2.mp3',
    },
    {
      id: 3,
      name: 'Клуша',
      species: 'Larus fuscus',
      description:
        'Птица отличается длинными крыльями, что придает элегантность ее полету. Летает клуша хорошо, за пищей отправляется далеко от берега, в открытое море. Во время пения птица вначале опускает голову внизу, после чего поднимает ее резко вверх.',
      image: 'https://live.staticflickr.com/65535/50260396316_9eee7dbe19.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SNRCANJSRX/XC572200-Larus fuscus ad calls alarm at WTE HV 200617 a.mp3',
    },
    {
      id: 4,
      name: 'Обыкновенная гага',
      species: 'Somateria mollissima',
      description:
        'Гага – это большая утка коренастого телосложения с короткой шеей, крупной головой и клиновидным клювом, несколько напоминающим гусиный. Длина тела птицы от 50 до 70 см, размах крыльев составляет 80-110 см, вес от 1,8 до 3 кг.',
      image: 'https://live.staticflickr.com/65535/50256524661_50b09aeb8b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/INCBVJJLBJ/XC562812-Default Project.mp3',
    },
    {
      id: 5,
      name: 'Баклан',
      species: 'Phalacrocorax',
      description:
        'По размеру бакланы напоминают уток и гусей. Длина их тела от 50 до 100 см, размах крыльев составляет 90-160 см. Шея, крылья и хвост у птицы длинные, благодаря чему во время полета бакланы напоминают крест. ',
      image: 'https://live.staticflickr.com/65535/50281825921_742379a6dd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KBSWHFODNI/XC123075-Flightless-Cormorant-Dusan-Brinkhuizen-1.mp3',
    },
    {
      id: 6,
      name: 'Гагарка',
      species: 'Alca torda',
      description:
        'Длина тела гагарки от 38 до 45 см. Масса изменяется в достаточно широких пределах от 0,5 до 1 кг. Размах крыльев достигает 70 см. Крылья у самцов длиннее, чем у самочек. Хвост у птицы также длинный. Клюв черный, тупой на кончике.',
      image: 'https://live.staticflickr.com/4425/35623074253_fd85a3d245.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC576492-Tordmule_05.mp3',
    },
  ],
];

export default birdsData;
