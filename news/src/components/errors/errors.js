export const validate=(e)=>{

    const errors={};

    if(e.title&& e.title.length<5)
{
    errors.title='Başlığınız açıklayıcı olmalı.'
}
if(e.content&& e.content.length<5)
{
    errors.content='İçeriğiniz açıklayıcı olmalı.'
}
if(e.url&& e.url.length<5)
{
    errors.url='Haber için link giriniz.'
}
if(e.date&& e.date.length<5)
{
    errors.date='Tarih seç.'
}
return errors;
}