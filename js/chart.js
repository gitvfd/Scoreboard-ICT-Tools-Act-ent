function chartDrawing(ISO){
	
 	chart.selectAll("*")
 		.remove();

 	var couValue=totData.filter(function(d){return (d.Period=="1") && (d.value!=""); });
 	var couYear=totYear.filter(function(d){return d.Period=="1" ; });
       
console.log(totYear)



  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate( "+ 0 +"," + (height-margin.bottom) + ")")
      .call(d3.axisBottom(x))
    .selectAll(".tick text")
      .call(wrap, x.bandwidth());
      
  chart.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate( "+0 +"," + 0+ ")")
      .call(d3.axisLeft(y).ticks(5).tickSize(-width))
    	.append("text")
      .attr("x", 0)
      .attr("y", margin.top)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", 600)
      .attr("text-anchor", "end")
      .text("%");;


 	chart.selectAll("circle")
 	.data(couValue)
 	.enter()
 	.append("circle")
 	.attr("class",function(d) {
			return d.ISO +" "+d.Period;
	})
	.attr("cx", function(d) {
			return (x(d.variable)+x.bandwidth()/2);
	    })
	    .attr("cy", function(d) {
	    		return y(d.value);
	    })
	.attr("r", 6)
	.attr("fill","#8EA4B1")
	.style('opacity', 0.25)
	.on('mouseover',function(d){
	    	d3.select(this)
				.style("opacity",0.75);

	    	d3.select(this)
				.attr("r",8);

			var xPosition = d3.event.pageX+20;
			var yPosition = d3.event.pageY+15;
			if(xPosition>3*screenSide/4)
				xPosition = xPosition -screenSide/4 -50;

			if(yPosition>2/3*(height/3))
				yPosition = yPosition -(height/3)/3 -40;




			chartTooltip(d.ISO,d.variable);
	         //Show the tooltip

			     d3.select("#countryName")
			        .text(d.Country);


			     d3.select("#catSelected")
			        .text(d.variable);
			           
			     d3.select("#valueSel")
			        .text(function() {return d.value + "%"});
				
				var yearData;

				couYear.forEach(function(k){
					if((k.ISO==d.ISO) && (k.variable==d.variable))
						yearData= " ("+ k.value + ")";
				})      

			     d3.select("#yearSel")
			        .text(yearData);

			d3.select("#tooltip")
		        .style("left", xPosition + "px")
		        .style("top", yPosition + "px") ;

			d3.select("#tooltip").classed("hidden", false);	

	})
	.on('mouseout', function(d){
	    	d3.select(this)
				.style("opacity",0.25);

	    	d3.select(this)
				.attr("r",6);

	            //Hide the tooltip
				d3.select("#tooltip").classed("hidden", true);	
	})
	.on('click',function(d){
    	document.getElementById("countryFilter").value=d.ISO;
    	chartDrawing(d.ISO)
	})



chart.selectAll()
 	.data(couValue.filter(function(d){return d.ISO==ISO;}))
 	.enter()
 	.append("circle")
 	.attr("class",function(d) {
			return d.ISO +" "+d.Period;
	})
	.attr("cx", function(d) {
			return (x(d.variable)+x.bandwidth()/2);
	    })
	    .attr("cy", function(d) {
	    		return y(d.value);
	    })
		.attr("r", 6)
		.attr("fill","#E73741")
		.style('opacity', 1)

	.on('mouseover',function(d){
	    	d3.select(this)
				.style("opacity",0.75);

	    	d3.select(this)
				.attr("r",8);

			var xPosition = d3.event.pageX+20;
			var yPosition = d3.event.pageY+15;
			if(xPosition>3*screenSide/4)
				xPosition = xPosition -screenSide/4 -50;

			if(yPosition>2/3*(height/3))
				yPosition = yPosition -(height/3)/3 -40;


			chartTooltip(d.ISO,d.variable);
	         //Show the tooltip

			     d3.select("#countryName")
			        .text(d.Country);


			     d3.select("#catSelected")
			        .text(d.variable);
			           
			     d3.select("#valueSel")
			        .text(function() {return d.value + "%"});
				
				var yearData;
				couYear.forEach(function(k){
					if(k.ISO==d.ISO && k.variable==d.variable)
						yearData= " ("+k.value+")";
				})         

			     d3.select("#yearSel")
			        .text(yearData);

			d3.select("#tooltip")
		        .style("left", xPosition + "px")
		        .style("top", yPosition + "px") ;

			d3.select("#tooltip").classed("hidden", false);	

	})
	.on('mouseout', function(d){
	    	d3.select(this)
				.style("opacity",1);

	    	d3.select(this)
				.attr("r",6);

	            //Hide the tooltip
				d3.select("#tooltip").classed("hidden", true);	
	})
	.on('click',function(d){
    	document.getElementById("countryFilter").value=d.ISO;
    	chartDrawing(d.ISO)
	})




}