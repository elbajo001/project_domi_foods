from django.core.exceptions import ValidationError
from django.core.validators import URLValidator

def url_mine(value):
    if not 'http://' in value and not 'https://' in value:
        value = 'http://' + value
    validator = URLValidator()
    print("url" + value)
    try:
        validator(value)
    except ValueError:
        raise ValidationError('Por favor ingrese una url válida con http o https. Ej. http://www.myfoods.com')
    #return value
    

def url_validation(value):
    if not 'http://' in value and not 'https://' in value:
        raise ValidationError(f'Por favor ingrese una url válida con http o https. Ej. http://%s' %  value)


def validate_url(self, url):
    if not 'http://' in url and not 'https://' in url:
        url = 'http://' + url
    url_validate = URLValidator()
    try:
        url_validate(url)
    except:
        raise ValidationError('Por favor ingrese una url válida con http o https. Ej. http://www.myfoods.com')
    return url

class OptionalSchemeURLValidator(URLValidator):
    def __call__(self, value):
        if '://' not in value:
            # Validate as if it were http://
            value = 'http://' + value
        super(OptionalSchemeURLValidator, self).__call__(value)