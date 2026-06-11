export const images = {
  plov: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop",
  doner: "https://images.unsplash.com/photo-1626804475297-41609ae0ee4c?q=80&w=2070&auto=format&fit=crop",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop",
  drinks: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop",
  comboFamily: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
  comboStudent: "https://media.istockphoto.com/id/1143191120/photo/traditional-moroccan-tajine-of-chicken-with-dried-fruits-and-spices.webp?a=1&b=1&s=612x612&w=0&k=20&c=r47XwaD2B0MS_ynn-3vG3aXU3zOVb71TYh4bdU4GZUw=",
  saladBar: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop",
  fastfood1: "/yemek1.jpg",
  fastfood2: "/yemek2.jpg",
  fastfood3: "/yemek3.jpg",
};



 export const menuArchitectureItems = [
  {
    id: "plov",
    title: "Plov Box",
    description: "Milli mətbəxin şahı olan plovun müasir və sürətli servis üçün uyğunlaşdırılmış innovativ qablaşdırması.",
    image: images.plov,
  },
  {
    id: "doner",
    title: "Dönər",
    description: "Yüksək keyfiyyətli ət, təzə tərəvəzlər və rebrendinq paketinin unikal servis standartları ilə təqdimat.",
    image: images.doner,
  },
  {
    id: "burger",
    title: "Kabab Burger",
    description: "Qlobal fast-food fenomeninin yerli kabab ənənələri ilə cəsarətli və dadlı kəsişməsi.",
    image: images.burger,
  },
  {
    id: "drinks",
    title: "İçkilər",
    description: "Milli içkilərin müasir şüşə qablarda innovativ təqdimatı. Təbii və faydalı alternativlər.",
    image: images.drinks,
  },
];

export const comboItems = [ 
  {
    id: "aile-kombo",
    title: "MİLLİ Ailə Kombo",
    description: "Plov və kabab ətirləri, yanında fri və içkilərlə dolu süfrə. Azərbaycanın milli dadlarını şəhərin ortasında, Bravo-da ailənlə birlikdə yaşat.",
    category: "Menu / Kombo",
    image: images.comboFamily,
  },
  {
    id: "telebe-menyusu",
    title: "Tələbə Menyusu",
    description: "Milli dadında dönər, yanında kartof fri və təravətli içki. Gündüz dərs, fasilədə isə Milli ləzzəti.",
    category: "Menu / Tələbə",
    image: images.comboStudent,
  },
];

 export const saladFeatures = [
  {
    id: "teze-movsum",
    titleLines: ["Təzə Mövsüm", "Salatları"],
    description: "Hər gün mütəxəssislərimiz tərəfindən yerli və təzə tərəvəzlərdən hazırlanan, rəngarəng və vitamin deposu olan salat seçimlərimiz.",
  },
  {
    id: "milli-soyuq",
    titleLines: ["Milli Soyuq", "Dadlar"],
    description: "Dünya mətbəxinin ən sevilən soyuq qəlyanaltıları - klassik Sezar, Mimoza və s. salatlarının \"Local Spirit\" toxunuşu ilə təqdimatı.",
  },
  {
    id: "yungul-saglam",
    titleLines: ["Yüngül və", "Sağlam"],
    description: "Yolüstü sürətli qidalanma üçün ideal olan meyvə barları və təbii qatıqlı qəlyanaltılar hər zaman vitrinimizdə təzəliyini qoruyur.",
  },
];




export const heroCafe = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop";
export const aboutCraft = "/felsefemiz3.jpg";
export const textureCarpet = "https://images.unsplash.com/photo-1582264560416-566085a6764d?q=80&w=2070&auto=format&fit=crop";
export const menuPakhlava = "/yemek1.jpg";
export const menuTea = "/yemek2.jpg";
export const menuCoffee = "/yemek3.jpg";

export const t1 = "/sef1.jpg";
export const t2 = "/sef3.jpg";
export const t3 = "/sef2.jpg";

export const team = [
  { img: t1, name: "Elvin Quliyev", role: "Baş Barista" },
  { img: t2, name: "Aysel Hüseynli", role: "Şirniyyat Şefi" },
  { img: t3, name: "Rüstəm Əliyev", role: "Baş Aşpaz" },
];

export const menu = [
  { name: "PLOV BOX", desc: "Azərbaycan mətbəxinin sevilən plovunu müasir təqdimatla bir araya gətirən Plov Box, ənənəvi dadı qoruyaraq hər yeməyi rahat, doyumlu və zövqlü təcrübəyə çevirir.", img: menuPakhlava },
  { name: "DÖNƏR", desc: "Yüksək keyfiyyətli ətdən, təzə tərəvəzlərdən və xüsusi reseptlə hazırlanan souslardan hazırlanan dönərimiz hər porsiyada zəngin dad və tam doyum hissi təqdim edir..", img: menuTea },
  { name: "KABAB BURGER", desc: "Ənənəvi kabab ləzzətini burger formatında təqdim edən Kabab Burger, yerli mətbəxin sevilən dadlarını müasir fast-food təcrübəsi ilə birləşdirərək fərqli seçim axtaranlara unudulmaz dad bəxş edir.", img: menuCoffee },
  { name: "MİLLİ SALAT", desc: "Yerli fermerlərdən alınan təzə tərəvəzlərlə və xüsusi narşərab sousu ilə hazırlanan milli salatımız yeməyinizə yüngüllük və ləzzət qatacaq.", img: menuTea },
  { name: "TƏNDİR ŞAÜRMASI", desc: "İsti təndir çörəyi arasında bol ət və xüsusi Milli sousu ilə təqdim edilən şaürma sizə ənənəvi və müasir ləzzəti eyni anda daddıracaq.", img: menuCoffee },
  { name: "MİLLİ İÇKİLƏR", desc: "Təzə meyvələrdən hazırlanan kompotlar və ənənəvi ayranımız yeməklərinizin ən yaxşı tamamlayıcısı olaraq süfrənizi bəzəyir.", img: menuPakhlava },
];

export const aboutValues = [
  {
    n: "01",
    t: "Mənşə",
    d: "Hər inqrediyent yerli torpağın nəfəsindən, yerli sənətkarın əlindən gəlir.",
  },
  {
    n: "02",
    t: "Sənətkarlıq",
    d: "Hər çörək, hər dəmləmə — uzun illərin səbri ilə formalaşan bir ritualdır.",
  },
  {
    n: "03",
    t: "Qonaqpərvərlik",
    d: "Süfrəmizə oturan hər kəs — qonaq deyil, ailəmizin bir parçasıdır.",
  },
];

export const galleryImages = [
  { src: "/IMG_7725.PNG", span: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: "/blog2.jpg", span: "aspect-square" },
  { src: "/blog1.jpg", span: "aspect-square md:row-span-2 md:aspect-[1/2]" },
  { src: "/blog3.jpg", span: "aspect-square" },
  { src: "/sef1.jpg", span: "aspect-square" },
  { src: "/yemek2.jpg", span: "aspect-square" },
  { src: "/yemek3.jpg", span: "md:col-span-2 aspect-[2/1]" },
  { src: "/yemek1.jpg", span: "aspect-square" },
];

export const blogPosts = [
  { id: "yeni-filial", img: "/blog1.jpg", cat: "Sənət", date: "12 Mart 2024", title: "Yeni Filial Açılışı – Milli Bravo Azure-da Xidmətinizdədir", excerpt: "Milli Bravo Azure ərazisində yeni filialını istifadəyə verdi. Bu açılış müştərilərə daha yaxın olmaq, gündəlik ehtiyacları daha sürətli və rahat şəkildə qarşılamaq məqsədi daşıyır. Yeni məkan müasir dizayn, geniş məhsul çeşidi və optimallaşdırılmış alış-veriş axını ilə fərqlənir. Açılış günü xüsusi kampaniyalar və endirimlər ilə müşayiət olundu. Bu addım brendin böyümə strategiyasında mühüm mərhələ kimi dəyərləndirilir və şəhər daxilində xidmət şəbəkəsini daha da gücləndirir." },
  { id: "milli-qlobal-konsept", img: "/blog4.jpg", cat: "Qəhvə", date: "28 Fevral 2024", title: "Milli və Qlobal Dadların Birləşdiyi Yeni Konsept", excerpt: "Müasir istehlakçı artıq təkcə məhsul deyil, təcrübə axtarır. “Milli və qlobal dadlar yerli ruhla” konsepti də məhz bu ehtiyacdan doğur. Burada dünya mətbəxinin sevilən elementləri yerli zövqlə uyğunlaşdırılaraq təqdim olunur. Nəticədə həm tanış, həm də fərqli dad təcrübəsi yaranır. Bu yanaşma brendlərə yalnız məhsul satmaq deyil, mədəniyyətlər arasında körpü qurmaq imkanı verir." },
  { id: "yerli-ruh-qlobal-keyfiyyet", img: "/blog2.jpg", cat: "Mədəniyyət", date: "05 Yanvar 2024", title: "Yerli Ruh, Qlobal Keyfiyyət: Yeni Nəsil Dad Təcrübəsi", excerpt: "Qida sənayesində ən böyük tendensiyalardan biri lokal kimliyi qoruyaraq qlobal standartlara uyğunlaşmaqdır. Bu yanaşmada məhsulların hazırlanması zamanı yerli reseptlər əsas götürülür, lakin təqdimat və keyfiyyət standartları beynəlxalq səviyyəyə uyğunlaşdırılır. Beləliklə, istehlakçı həm nostalji hissi yaşayır, həm də modern bir təcrübə əldə edir." },
  { id: "dadlarin-seyyaheti", img: "/blog3.jpg", cat: "Atmosfer", date: "20 Dekabr 2023", title: "Dadların Səyahəti: Lokal Dəyərlərdən Qlobal Trendlərə", excerpt: "Qida mədəniyyəti artıq sərhəd tanımır. Bir çox yerli dadlar beynəlxalq bazarlarda trendə çevrilir. “Milli və qlobal dadlar” konsepti bu səyahətin əks istiqamətini də yaradır — dünya mətbəxini yerli zövqlə uyğunlaşdırır. Bu yanaşma həm innovasiya, həm də mədəni adaptasiya baxımından böyük əhəmiyyət daşıyır." },
];



