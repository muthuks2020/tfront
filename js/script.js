

$(document).ready(function(){
	   
	   /*index page*/
		
		$("#filter-btn").click(function(){

			$("#filter-index-dropdown").slideToggle();
			$("#productlist").slideUp();
			$("#statuslist").slideUp();
		});
		
		$("#product").click(function(){
			$("#productlist").slideToggle();
		});
		
		$("#status").click(function(){
			$("#statuslist").slideToggle();
		});
		
		$("#fromdate, #todate").datepicker();
		
		
		/*generate ad page and details page*/
			
	
			

			
			$("#adtag-btn").click(function(){
				var tag = $("#adtag-box");
				var txt = $("#gentdAdtag");
				txt.val("\<script\>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\<\\script\>");
				txt.select();
				tag.slideDown('slow');
				$("#neonID").text("AWS5288245");
			})							
			
			var clonenum=0;
			$("#add-url-btn").click(function(){
				
				var newclone=$("#imp-url-unit"+clonenum).clone(true);
				newclone.appendTo($("#imp-url-container"));									
				$(this).addClass("remove-url");
				$(this).attr("id","");
				$(this).off();
				
				$(this).on("click",function(){
					$(this).parent().parent().remove();
					});
				
				$(this).html("<span class='glyphicon glyphicon-minus'></span>");
				clonenum+=1;
				newclone.attr("id","imp-url-unit"+clonenum);									
				$("#imp-url-unit"+clonenum+" input").val("");
				return false;
			})

			$('#multicheckboxes').multiselect();
			$('#aspectRatio').multiselect();
			$('#resolution').multiselect();
			$('#bitrates').multiselect();
			
			function rm_vd_options(){
				var prod = $("#productType").val();
				if(prod == "videoPreRolls" || prod == "videoCompanionAds" || prod == "inBannerVideo" || prod == "phoneAppInterstitial" || prod == "tabletAppInterstitial" || prod == "mobileSlider"){
					$("#rmChoice").hide();
					$("#vdChoice").show();
					$("#impTrackURL").text("Third-party Tracking URL");
					$("#eventSelect").html("<option value='start'>Start</option><option value='play'>Play</option><option value='pause'>Pause</option><option value='mute'>Mute</option><option value='muteOff'>Mute Off</option><option value='expand'>Expand</option><option value='contract'>Contract</option><option value='replays'>Replays</option><option value='close'>Close</option><option value='skips'>Skips</option>	<option value='played25'>Played 25%</option><option value='played50'>Played 50%</option><option value='played75'>Played 75%</option><option value='played100'>Played 100%</option>");
				}
				else{
					$("#rmChoice").show();
					$("#vdChoice").hide();
					$("#impTrackURL").text("Impression Tracking URL");
					$("#eventSelect").html("<option value='impression'>Impression</option>");
				}
				
			}
			
			$(window).on("load", rm_vd_options);
			$("#productType").on("change", rm_vd_options);
			
			$("#filesDisplay").hide();
			
			$("#browse").on("change",function(){
				if($("#browse").val() !=''){
					$("#filesDisplay").show();
					}
			})
		
			/*details page*/

			$("#editCampaign").on("click",enableEditing);
			function enableEditing(){				
				$('#add-url-btn').css("display","block");
				$("ul.nav-tabs li").removeClass("active");
				$("ul.nav-tabs a[href='#info'").parent().addClass("active");
				$("#info").addClass("active");
				$("#adAsset").removeAttr("disabled");
				$("#changeFile").css("display","block");
				$("#CTRURL").removeAttr("disabled");
				$("#imp-url-unit0 input, #imp-url-unit0 select").removeAttr("disabled");
				$("#add-url-btn").css("display","block");
				$("#multicheckboxes").multiselect("enable");
				$("#iFramebuster").removeAttr("disabled");
				$("#useHTTPS").removeAttr("disabled");
				$('#aspectRatio').multiselect("enable");
				$('#resolution').multiselect("enable");
				$('#bitrates').multiselect("enable");
				$('#vastVersion').removeAttr("disabled");
				$('#scalability').removeAttr("disabled");
			}
			
			
			$("#filter-metrics-btn").click(function(){
			 $("#filter-dropdown").slideToggle();
			 });
			 $("#fromdate, #todate").datepicker();
		
			$( "#User-dropdown" ).click(function() {
			$( "#User-content" ).slideToggle( "normal" );
			});
			
			
			if(($('#aspectRatio option:eq(0)').prop('selected') == false) || ($('#aspectRatio option:eq(1)').prop('selected') == false)){
				$('#resolution').multiselect("disable");
				$('#resolution').multiselect('refresh');
			}
			
			$("#aspectRatio").on("change",function(){
				if($('#aspectRatio option:eq(0)').prop('selected') == true){
					$('#resolution').multiselect("enable");
					$('#resolution optgroup#four3 option').prop('selected', false);
					$('#resolution optgroup#six9').prop('disabled', false);
					$('#resolution').multiselect('refresh');
				}
				else{
					$('#resolution optgroup#six9').prop('disabled', true);
					$('#resolution').multiselect('refresh');
				}
				if($('#aspectRatio option:eq(1)').prop('selected') == true){
					$('#resolution').multiselect("enable");
					$('#resolution optgroup#six9 option').prop('selected', false);
					$('#resolution optgroup#four3').prop('disabled', false);
					$('#resolution').multiselect('refresh');
				}
				else{
					$('#resolution optgroup#four3').prop('disabled', true);
					$('#resolution').multiselect('refresh');
				}
			})
		
});