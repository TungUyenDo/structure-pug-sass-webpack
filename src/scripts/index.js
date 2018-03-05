import '../styles/index.scss';

var dt = require('datatables.net')

$("button").on("click", () => { // Khi click button
    System.import('../styles/xinchao.scss').then(()=>{ // chúng ta sẽ import xinchao.css vào
        console.log("add file xinchao.css thành công")
    });
});

$(document)
    .ready(function () {
        console.log(2323);
        $('#example').DataTable({lengthChange: false, searching: true, bFilter: false, bInfo: false});

        var table = $('#example').DataTable();

        $('.search-form').on('keyup', function () {
            table.search(this.value).draw();
    });
});