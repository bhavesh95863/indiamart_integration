frappe.ui.form.on('IndiaMart Setting', {
	refresh: function(frm) {
		var help_content =
			`
			<table class="table table-bordered" style="background-color: #f9f9f9;">
				<tr><td>
					<h4>
						<i class="fa fa-hand-right"></i> 
						${__("Notes")}:
					</h4>
					<ul>
						<li>
							${__("It is advised to hit this API once in every 15 minutes.")}
						</li>
					
					</ul>
				</td></tr>
			</table>`;

		set_field_options("section_break_1", help_content);

	},
	add_source_for_india_mart: function(frm) {
		frappe.call({
			method:"indiamart_integration.api.add_source_lead",
			args:{},
			callback:function(r){
				console.log(r)
			}
			
		})

	},
	from_date:function(frm){
		cur_frm.save()
	},
	to_date:function(frm){
		cur_frm.save()
	},
	sync_lead:function(frm){
		if(!frm.doc.from_date || !frm.doc.to_date){
			frappe.throw(__("From And To Date Mandatory"))
		}
		if(frm.doc.from_date && frm.doc.to_date){
		frappe.call({
			method:"indiamart_integration.api.sync_india_mart_lead",
			args:{"from_date":frm.doc.from_date,"to_date":frm.doc.to_date},
			freeze:true,
			freeze_message:"Please Wait . .",
			callback:function(r){
				
			}
		
		})
	    }
	}
});
