

function openNewBackgroundTab(url){
    var a=$("<a href='"+url+"' class='temp' target='_blank' >")
    $(document.body).append(a)
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, true, 0, null);
    a.get(0).dispatchEvent(evt);
    a.remove()
}

var baseURL="https://jobmine.ccol.uwaterloo.ca/psp/SS_5/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL?Page=UW_CO_STU_JOBDTLS&UW_CO_JOB_ID="
$(document).bind('DOMNodeInserted',function(e){
	if($(e.target).is("table.PSPAGECONTAINER")){
		$("a[id^='UW_CO_JOBTITLE_HL']:not(.done)").each(function(i,elem){
			var viewid=$(elem).attr("id").match(/\d+$/)
			var jobid=$(elem).closest("tr").find("span[id^='UW_CO_JOBRES_VW_UW_CO_JOB_ID']").html()
			console.log("done"+jobid)
			$(elem).click(function(e){
				e.preventDefault()
				openNewBackgroundTab(baseURL+jobid)
			})
			$(elem).addClass("done")
		})
	}
})