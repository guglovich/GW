function messageDialog(element, options)
{
	var width = (options && options.width) ? options.width : 433;
	var height = (options && options.height) ? options.height : 381;
	$(element).dialog({width: width, height: height, resizable: false, modal: true, zIndex: 9999, stack: true, show: 'fadeIn', hide: 'fadeOut'});
	return false;
}

function loading(element)
{
	if (!element)
		element = '<div class="loading" title="">Загружаем</div>';
    messageDialog(element);
    setInterval(function (){
            var text = $('.loading').html();
            if (text == null)
                return;

            if (text.length > 20)
                $('.loading').html('');
            else
                $('.loading').html(text + '.');
        },
        600);
}

function hideLoad()
{
	$('.loading').dialog('close');
}

function customTabs(element)
{
	var object = $(element);
	
	if (!object)
		return;
	
	object.tabs();
	if (object.children('ul li.second'))
	{
		object.children('ul').children('li').bind('mouseenter', function () {
			var number = '';
			
			var object = $(this);
			
			if (object.hasClass('first'))
				number = 'first';
			else if (object.hasClass('second'))
				number = 'second';
			else if (object.hasClass('third'))
				number = 'third';
				
			if (number != '')
				$(this).addClass(number + '-active');
				
			object.children('a').animate({'margin-top': -7}, 200, function () { $(this).css('color', '#d6d6b8'); });
		});
		object.children('ul').children('li').bind('mouseleave', function () {
			$(this).removeClass('first-active');
			$(this).removeClass('second-active');
			$(this).removeClass('third-active');
			
			$(this).children('a').animate({'margin-top': 0}, 200, function () { $(this).css('color', '#a7b6d6'); });
		});
	}
}