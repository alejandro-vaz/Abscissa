#
#   HANDLER
#

# HANDLER -> LOAD
import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from handler import *


#
#   FUNCTION
#

# FUNCTION -> DECLARATION
def output(request: object) -> object:
    # DECLARATION -> EXTENSIONS
    from extensions import _
    _.__init__(request)
    from extensions import database, post
    
    # DECLARATION -> ARGUMENT CHECKS
    if not post.checks("Oname"): return SUG.REQ.RES.error(1)
    
    # DECLARATION -> ARGUMENT RELATIONSHIP
    if not post.exists("Oname"): return SUG.REQ.RES.error(2)
    
    # DECLARATION -> USER AUTHENTIFIED WITH PERMISSIONS
    if not (SUG.THR.DBV and SUG.THR.UDT["Urole"] >= SUG.PER["organisation"]["create"]): return SUG.REQ.RES.error(3)
    
    # DECLARATION -> QUERY
    SUG.REQ.RES.write(database.request(
        "INSERT INTO ORGANISATIONS (Oname) VALUES (?)",
        [
            SUG.REQ.PST["Oname"]
        ]
    ))
    return SUG.REQ.RES.get()