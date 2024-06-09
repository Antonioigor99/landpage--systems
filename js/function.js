window.onload = function () {
    var map = {};
    function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -29.161116, lng: -51.521811 },
            zoom: 12,
            scrollwheel: false,
            mapTypeId:google.maps.MapTypeId.SATELLITE
        });
    }
    function addMarker(lat,long,icon,content,click){
        var latLng = {'lat':lat,'lng':long};
        var marker = new google.maps.Marker({
            position:latLng,
            map: map,
            icon:icon
        });
        var infoWindown = new google.maps.infoWindown({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        })
        if(click == true){
            google.maps.event.addListner(marker,'click',function(){
                infoWindown.open(map,marker)
            });
        }else{
            infoWindown.open(map,marker)
        }
    }
    initialize();
    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;"'
    addMarker(-29.161116,-51.521811,'',conteudo,true);
}
    // function animal(){
    //     // This é referente ao objeto
    //     this.nome= 'cachorro';
    //     this.peso= '24kg';
    // }
    // var meuAnimal = new animal();
    // console.log(meuAnimal.nome)