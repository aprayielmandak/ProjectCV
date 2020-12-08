// event saat link di klik

$('.page-scroll').on('click', function(e){

	// ambil isi href 
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
    $('body,html ').animate({
        scrollTop: elemenTujuan.offset().top -  80
    },  1500, 'easeInOutBack');
	e.preventDefault();
});