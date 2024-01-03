id: fedb31e2-c99b-4dda-9c4d-ca354dfb709a
publishedAt: '2011-07-25 12:42:02'
type: halftext
title: Sahibinden.com Açığı
description: ''
slug: /sahibinden-com-acigi
image: ''
tags:
  - key: internet
    name: İnternet
  - key: sahibinden-kod-acigi
    name: sahibinden kod açığı
  - key: sahibinden-com
    name: sahibinden.com
  - key: yazilim
    name: Yazılım
content: "\n\t\t\t\tMerhabalar,\r\n\r\n<a href=\"http://www.abdullahonden.com/wp-content/uploads/sahibinden_logo.jpg\"><img class=\"alignleft size-medium wp-image-258\" title=\"sahibinden_logo\" src=\"http://www.abdullahonden.com/wp-content/uploads/sahibinden_logo-300x120.jpg\" alt=\"\" width=\"300\" height=\"120\" /></a>Bu sabah ilginç bir şey ile karşılaştım. Sahibinden.com adresine girdiğimde ve herhangi bir şey aradığımda bir kod parçacığı önüme döküldü. Genelde olabilir böyle şeyler, bir syntax hatası yapılır ve anlamsız kodlar önünüze gelir. Yok yok bu böyle değildi, kaynağını görüntülediğimde o korkunç görüntü ile karşılaştım, evet bunlar kaynak kodlardı.\r\n\r\nİşin garip yanı hata search kısmındaydı yani burayla ilgili sonuçlar bekleyebilirdik fakat gördüğüm tamamen config dosyalarıydı. Yani sahibinden.com'un web farm bilgilerinden, ftp şifrelerine, mongo database bilgilerinden session parametrelerine kadar her şey. Oysa ki hata çok ama çok basit bir şeyden kaynaklanmıştı, &lt; yazmak yerine bir üst tuş olan a harfine basılmıştı. Yani &lt;?php yerine a?php.\r\n\r\nİşte hala Türkiye'de yazılım anlayışının oturmadığının kanıtı. Production servera atılacak her dosya test edilmelidir. İlginçtir ki bu dosya local development ortamında da böyle gözükürdü, gerçekten büyük aceleleri vardı sanırım bir hotfix belki?\r\n\r\nSözün özü muhtemelen tüm altyapı değişecek, bu gibi durumların oluşmaması için ara katmanlar eklenecek ve daha iyi bir development processi geliştirilecektir, en azından böyle umuyorum ben.\r\n\r\nBu açığı bulduğumda yetkililere nereden ulaşabileceğimi bilemedim, ama sanırım onlar da fazla sürmeden farkettiler. Fakat yine de 1 dakika bile uzun bir süre ki sanırım 15 dakika yayınlandı bunlar.\r\n\r\nŞimdiden sahibinden.com'a geçmiş olsun diler, bu durumdan iyi bir ders çıkartmış olduklarına inanmak isterim. Bir iki kişiye suçu atıp olayı örtbas etmektense tüm ekibin toparlanıp acil kararlar almasını dilerim, zira Türkiye'de genelde suç atma vb. durumlarla bu iş temizlenir anlayışı vardır.\r\n<blockquote>Her ne kadar sahibinden.com'dan bana ulaşılmamış olsa da, ekşi sözlük'te yorum yapan tahminimce bir sahibinden.com developerının belirttiğine göre problemin sebebi basit bir hata değilmiş. Günde 2 milyon hit alan sahibinden.com'un bir saldırı sonucu Php interpreterı çökmüş ve bizler config parametreleri ile karşılaşmışız. Bunun yanında kredi kartlarının vs. risk durumu yok arkadaşlar.</blockquote>\r\n<div id=\"_mcePaste\" class=\"mcePaste\" style=\"position: absolute; left: -10000px; top: 168px; width: 1px; height: 1px; overflow: hidden;\"><a class=\"spell\" href=\"http://www.google.com/search?hl=en&amp;client=firefox-a&amp;hs=9ML&amp;rls=org.mozilla:en-US:official&amp;sa=X&amp;ei=AJouToyNC8qj8QO4rIFQ&amp;ved=0CCYQvwUoAQ&amp;q=interpreter&amp;spell=1\"><strong><em>interpreter</em></strong></a>.r</div>\t\t"
