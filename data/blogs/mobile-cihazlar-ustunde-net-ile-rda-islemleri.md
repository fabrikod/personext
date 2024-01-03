id: 30df50e1-2ab5-45f1-8d81-49f301e364b3
publishedAt: '2009-03-05 11:02:07'
type: halftext
title: RDA ile Mobil Cihazlar Üzerinde Uygulama Geliştirme
description: ''
slug: /mobile-cihazlar-ustunde-net-ile-rda-islemleri
image: ''
tags:
  - key: net
    name: .Net
  - key: bilgisayar-muhendisligi
    name: Bilgisayar Mühendisliği
  - key: c
    name: C#
  - key: mobil-cihazlar
    name: Mobil Cihazlar
  - key: mobil-programlama
    name: Mobil Programlama
  - key: mobil-uygulama-gelistirme
    name: Mobil Uygulama Geliştirme
  - key: rda
    name: RDA
content: "\n\t\t\t\tTürkiye'de pek bilinmeyen bir şey mobil uygulama geliştirme hadisesi. Bu sebeple sessizliğimi bir süreliğine mobil işlemler için bozacağım.\r\n\r\nBen de herkes gibi mobil cihazlara ilk baktığımda \"ulen kim kullanır bunu\" demiş ve pek küçümsemiştim. Zira bir bilgisayar gibi rahat gelmemişti, yazı yazmak bile çok zordu bir kere. Hem database olsa bile ne kadar büyüklükte bir boyutu kaldırabilecekti ki? Fakat elbette Microsoft bizim için pek çok şey düşünmüştü.\r\n\r\nMobil işlemler hala sınırlı. Elbette bluetooth, wireless gibi pek çok seçenek gelişti. Fakat bunların yaygınlaşması zaman alacaktır. Biz oldukça eski fakat gerek kullanım kolaylığı gerek pratikliği ile oldukça popüler olmuş RDA hususunda ilerleyeceğiz. Bir de merge replication var ama ona değinmeyeceğiz.\r\n\r\nÖncelikle RDA nedir onu bir açıklayalım. RDA yani Remote Data Access, bir ana veritabanı ve buna bağlı local veritabanları arasında yapılan işlemleri sağlayan mimaridir. İyi de ne bu şimdi artist misin demeyin örnekle açıklıyorum hemen.\r\n\r\nBir satış temsilcisi düşünün, bu adam günde 50 firma gezecek diyelim. Firmasının sorumluluğu mümkün olduğunca elemanından verim almaktır. İşte burada mobil cihaz devreye girer. Bu adama bir PDA ya da ne varsa verilir. Adam çıkış noktasındaki servera gelir ve mobil cihazını ana servera bağlar. Sonra cihazındaki RDA ile geliştirilmiş uygulamasını açar ve kullanıcı adı şifresi ile \"data alma\" kısmına gelir. Bu işlem ile sunucudaki en güncel bilgileri alır ve yola koyulur. Bu bilgiler uygulamanın ihtiyaçlarına göre geliştirilir. Adamın satış rotasını çizelgeleyen, noıtlar alabileceği bir arayüz oluşturulabilir. Neyse adam gezer tozar, işlerini halleder şirketine döner. Elinde pek çok data oluşmuştur. Yine başladığı noktaya döner. Server'a cihazını bağlar, bu sefer \"data gönderme\" olayının gerçekleştiği ekrandan yaptığı tüm aktiviteleri içeren dataları gönderir. Böylece hem cihazı temizlenmiş, hem en son güncel bilgiler ana makineye gönderilmiş olur.\r\n\r\nİşte bizim Mobil işlemlerimizde RDA ana mantıkta bunu yapar. Ne kadar güzel değil mi?\r\n\r\nPeki nasıl yapar? Bir kere bizim bir IIS'e ihtiyacımız var. Bu abi cihaz ile server arasındaki local bağlantıyı sağlar. Diğer ihtiyacımız şüphesiz Microsoft Sql Server. Bir ana veritabanımız olacak ki ondan gidip bize özel dataları alalım değil mi? Alalım nereye alacağız? Evet bir de mobil cihazlar için biçilmiş kaftan olan Sql Server Compact Edition'a ihtiyacımız var. Bunu da mobil cihazımıza yükledikten sonra olan \"helva yapma\" hikayesine dönüyor.\r\n<p style=\"text-align: center;\"><img class=\"aligncenter\" title=\"RDA ile Mobil Uygulama Geliştirme\" src=\"http://www.csharpnedir.com/mimages/bsenyurt/mk145_1.gif\" alt=\"RDA Ne Yapıyor?\" width=\"552\" height=\"445\" /></p>\r\n\r\nHelvayı .net ile yapacağımızı söylemiştim. Bu platform bize üç ana fonksiyon sağlıyor. İlk ikisini yukarıda anlattım, hani data al data gönder. İşte bunları Pull ve Push fonksiyonalrı ile yapıyoruz. Pull veritabanından ilgili dataları çekmeye, push ise elimizdekileri sunucuya göndermemizi sağlar. Diğeri de SubmitSql fonksiyonudur. Bu doğrudan sunucu üstünde değişiklik yapmamızı sağlıyor. Bu pek gerekmez, ama gerekebilir de değil mi?\r\n\r\nKonuyla ilgili müthiş <a href=\"http://www.csharpnedir.com/makalegoster.asp?MId=586\" target=\"_blank\">bir makale</a> zamanında csharpnedir.com'da yayınlanmış. Ben üstten bir değinmek istedim. Belki vakit bulursam pek benzeri olmayan örnekler de eklemek isterim. En azından güncel olsun. 10 yıllık bilgiler değil de son teknoloji nereye geldi öğrenmek lazım değil mi?\r\n\r\nHadi bakalım, iyi oldu bu yazı.\t\t"
