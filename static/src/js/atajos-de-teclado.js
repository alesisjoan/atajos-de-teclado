// JavaScript key codes
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
/*

Key              Code         Key              Code         Key             Code
backspace          8          e                 69          numpad 8         104
tab                9          f                 70          numpad 9         105
enter             13          g                 71          multiply         106
shift             16          h                 72          add              107
ctrl              17          i                 73          subtract         109
alt               18          j                 74          decimal po       110
pause/brea        19          k                 75          divide           111
caps lock         20          l                 76          f1               112
escape            27          m                 77          f2               113
page up           33          n                 78          f3               114
page down         34          o                 79          f4               115
end               35          p                 80          f5               116
home              36          q                 81          f6               117
left arrow        37          r                 82          f7               118
up arrow          38          s                 83          f8               119
right arro        39          t                 84          f9               120
down arrow        40          u                 85          f10              121
insert            45          v                 86          f11              122
delete            46          w                 87          f12              123
0                 48          x                 88          num lock         144
1                 49          y                 89          scroll loc       145
2                 50          z                 90          semi-colon       186
3                 51          left windo        91          equal sign       187
4                 52          right wind        92          comma            188
5                 53          select key        93          dash             189
6                 54          numpad 0          96          period           190
7                 55          numpad 1          97          forward sl       191
8                 56          numpad 2          98          grave acce       192
9                 57          numpad 3          99          open brack       219
a                 65          numpad 4         100          back slash       220
b                 66          numpad 5         101          close brak       221
c                 67          numpad 6         102          single quo       222
d                 68          numpad 7         103


*/

$.ctrl = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[]; // IE barks when args is null 
        //console.log(e.keyCode)
        if((e.keyCode == key.charCodeAt(0) || e.keyCode == key) && e.ctrlKey) {
            callback.apply(this, args);
            return false;
        }
    });        
};

//New object by Ctrl + enter
$.ctrl('13', function() {
	$('.oe_form_button_create').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
	$('.oe_list_add').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});

//add item ctrl +
$.ctrl('107', function() {
	$("td.oe_form_field_one2many_list_row_add a").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
	$("td.oe_form_field_many2many_list_row_add a").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});

});

//Edit the current object
// ctrl + e
$.ctrl('69', function() {
	$('.oe_form_button_edit').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});
//Save the current object
$.ctrl('S', function() {

	var ok= true;
	$('.oe_abstractformpopup-form-save').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
			ok = false
		}
	});
	if(ok){
		$('.oe_form_button_save').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
	}

});

//Cancel the current object edition
// ESC
$.ctrl('27', function() {
	$('.oe_form_button_cancel').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});



//Previous object
// page up == 33
// left == 37
$.ctrl('37', function() {
	$('.oe_i[data-pager-action="previous"]').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});
//Next object
// page down == 34
// right == 39
$.ctrl('39', function() {
	$('.oe_i[data-pager-action="next"]').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});

//Save current pop-up and open new one ctrl+espace
/*$.ctrl('32', function() {

	$('.oe_abstractformpopup-form-save-new').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
			ok = false
		}
	});
});*/
//update
// para eso tenemos el F5 ...
/* //F1 == 112
$.ctrl('112', function() {
	$('.oe_subtotal_footer_separator button.oe_button.oe_form_button.oe_edit_only.oe_link').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
	$("span:contains('(update)')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).parents('.oe_button.oe_form_button.oe_link.oe_edit_only').trigger('click');
		}

	});
	$("span:contains('(mise à jour)')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).parents('.oe_button.oe_form_button.oe_link.oe_edit_only').trigger('click');
		}

	});
});*/

/*$.shortcut = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[]; // IE barks when args is null
        console.log(e.keyCode)
        if((e.keyCode == key.charCodeAt(0) || e.keyCode == key)) {
            callback.apply(this, args);
            return false;
        }
    });
};*/

//Delete the current object
/*$.ctrl('190', function() {
	$("a:contains('Delete')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
	$("a:contains('Supprimer')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});*/
// 46 == delete
/*$.ctrl('46', function() {
	$("a:contains('Delete')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
	$("a:contains('Supprimer')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});*/

//remove item ctrl -
/*$.ctrl('109', function() {
	$("td.oe_form_field_one2many_list_row_add").parent().prev().children('.oe_list_record_delete').children('button.oe_i').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
	$("td.oe_form_field_many2many_list_row_add").parent().prev().children('.oe_list_record_delete').children('button.oe_i').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});*/
//Duplicate the current object
/*$.ctrl('D', function() {
	$("a:contains('Duplicate')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
	$("a:contains('Dupliquer')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});*/