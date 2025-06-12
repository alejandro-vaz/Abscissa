#
#   HANDLER
#

# HANDLER -> LOAD
import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from handler import *

# INIT -> EXTENSIONS
from extensions.view import *

# INIT -> ACTIVATION
view_init()


#
#   URL PATTERNS
#

# URL PATTERNS -> INITIALIZATION
urlpatterns = []

# URL PATTERNS -> DECLARATIONS
views = [
]
scripts = [
]

# URL PATTERNS -> ADD PATTERNS
for view in views:
    urlpatterns.append(URLS.path(view, create_view(view)))
for script in scripts:
    urlpatterns.append(URLS.path(f'api/{script}', include(script).output))