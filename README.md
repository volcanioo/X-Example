# X Example for X Agency
Bu repo X firmasi tarafindan benden talep edilen bir ornegi barindirmaktadir. Bu dosya 30 Ekim 2017 gecesi 23:46 tarihinde olusturulmustur.

## 1. Repo Guncellemesi Notlari
Pure Javascript ile gelistirdigim ilk gercek proje tam olarak bu, aslinda karsiniza cikartmak icin buyuk bir risk, sonucta jQuery ile bunu dakikalar icerisinde cozmek varken ben pure javascript ile karsiniza cikiyorum. Bunun sebebi ise kendimi pure javascript uzerinde gelistirmek icin elimdeki tum donolari kullanmaya calisiyorum. Ilk basta baktigimda korkutmus olsada carousel yapisinin temel mantigini kavradiktan sonra sorunu ortadan kaldirdim, normal sartlar altinda owl carousel kullanirdim ancak bir plugin kullanmam tasarimin akibetini bozacagindan dolayi kendim yazma karari aldim.:wq X Example for X Agency

## 2. Repo Guncellemesi Notlari
Aslinda genel olarak bu repo notunda neden jquery yerine pure js ile gelistirdigim hakkinda biraz daha bilgi edindim. Performans acisindan jquery'in ortaya cikarttigi o buyuk KB'a sahip dosyayi kullanmaktansa kendi js dosyami olusturarak 10-15kb arasinda bunu cozmeyi hedefliyordum. Sanirim bu repo kaynaginda bunu gerceklestirdim.

## 3. Repo Guncellemesi Notlari
Baya bir yol kat ettim. Hammerjs kullanarak swipe efekti hakkinda detayli bilgiye sahip olmanin yani sira artik projelerimde jquery kullanmadan bazi scriptler yazabilirim. Gereginden fazla if-else yapisi olusturdugumu dusunuyorum. Bence yazdigim kodda bir yerlerde bir mantik hatasi yapmis olabilirim, fazla geciktirmemek icin bu scripti simdiden sizin tarafiniza iletmeyi hedefliyorum. Ilerleyen zaman dilimlerinde bos vakitlerimi degerlendirirken buna geri donecegim. Pure javascript ile ilk uygulamamin bu olacagi aklimin ucundan gecmezdi ama bence iyi oldu. Cunku Carousel yapisini ilk duydugumda tedirginlik yasamistim. Acaba carousel plugini kullansam nasil olur diye bir hayli dusundum ama sanirim jquery veya baska bir dis kaynak kullansaydim sorunumu direk cozecektim. Bu sorunun icerisinde biraz bogusmak icin kendime vakit ayirdim. Insan ancak boyle gelisebiliyor.

---

### Maddeler

* Hammerjs kullandim cunku hem dosya yuku cok azdi, hemde anlasilabilir bir dokumantasyona sahipti. Swipe plugini olarak sanirim gordugum bir cok plugin arasindaki en iyisi buydu.

## Final
Genel olarak anladigim kadariyla sizin ilgi odaginiz html ve css'ten cok js bilgim idi anladigim kadariyla o yuzden ben kusursuz sekilde yapabilecegim hover vb. islemlere onem vermektense genelde daha cok javascript scriptine deger vermeye calistim.

- Proje genelinde jquery kullanmadim cunku bu kadar ufak bir script icin, jQuery kullanmak gereksiz yere 40+ KB saglayacakti ben bu yuku 4.6KB icerisinde cozdum. Ancak swipe efekti icin kullanmam gereken kutuphanenin boyutu 20.3KBlik bir dezavantaj yaratti. Genel olarak kutuphaneler konusunda gene tasarruftayiz.
- Projenin toplam suresi assagi yukari 7-8 saat civari surdu. 
- Sizin yaptiginiz sablon mantiginda position: absolute mantigi ile gelistirme saglanmis. O alanda ciddi anlamda kullanilan element sayisi ortaya ciktigi zaman acik ara bir performans kaybi yasayacagimizdan dolayi ben css arayuzunu tamamen relative kullanarak gelistirdim.
- Gelistirdigim yapida gereksiz element kullanimindan kacindim. Genel olarak kurguladigim sablonda mobile gelince tum konsepti yok etmektense ortada duran konseptin uzerine yonelmeye devam ettim. Insanlara farki gorebilmelerini saglayabilmek icin.
- Image kullanimindan elimden geldigince kacindim ve arrowlar disinda baska bir seyi svg olarak kullanamayacagimdan sadece arrowlari svg kullanarak performans ve goruntu acisindan tasarruf ettim.
- Pure javascript ile gelistirdigim icin ciddi bir zaman kaybi yasadim ama bu genel olarak bana buyuk bir katki sagladi en azindan ilk canli projemi olusturmus oldum. Kendimi bu gibi zamanlarda gelistirmeyeceksem normal zaman dilimlerinin anlami maalesef yok. Bu yuzden responsive images olusturmaya calisip sizi daha fazla bekletmek istemedim.

## Son Olarak
Bana boyle bir calisma yarattiginiz icin tesekkur ederim. 2 gun icerisinde cok ciddi seyler ogrendim, bu scriptin bazi noktalarini bularak gelistirmeye ve arge surecine girmesine zamanla izin verecegim. Bu repo icerisinde hic biryerde projeyi kim icin nasil yaptigima dair bir bilgi bulunmamakla beraber, sizi etkilemeyecek sekilde tum onlemleri almis bulunmaktayim.
