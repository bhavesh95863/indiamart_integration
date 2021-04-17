from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Setting"),
			"items": [
				{
					"type": "doctype",
					"name": "IndiaMart Setting",
					"label": _("IndiaMart Setting"),
					"description": _("IndiaMart Setting"),
					"onboard": 1
				}
		]
	}
]
