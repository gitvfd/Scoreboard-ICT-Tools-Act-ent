function chartTooltip(ISO,variable){


	lineChart.selectAll("*")
 		.remove();
 
 	var lineValue=totData.filter(function(d){return d.ISO==ISO && d.variable==variable && d.value!="";; });
 	var lineYear=totYear.filter(function(d){return d.ISO==ISO && d.variable==variable ; });


	if (lineValue.length>1){
	 	lineChart.append("line")
	 		.attr("class","yearLine")
			.attr("x1", xLine(lineValue[1].Period))
			.attr("x2", xLine(lineValue[0].Period))
			.attr("y1",yLine(lineValue[1].value))
			.attr("y2",yLine(lineValue[0].value))
	    	.style("stroke", "#39617D")
	    	.style("stroke-width","1px")
	        .style("stroke-dasharray", ("5, 5"))  
	    	.style("fill","none");


	 	lineChart.selectAll("circle")
		 	.data(lineValue)
		 	.enter()
		 	.append("circle")
		 	.attr("class",function(d) {
					return d.ISO +" "+d.Period;
			})
			.attr("cx", function(d) {
					return (xLine(d.Period));
			    })
			    .attr("cy", function(d) {
			    		return yLine(d.value);
			    })
			.attr("r", 6)
			.attr("fill","#8EA4B1");


	 	lineChart.selectAll()
		 	.data(lineValue)
		 	.enter()
		 	.append("text")
			.attr("x", function(d) {
					return (xLine(d.Period))-15;
			    })
			    .attr("y", function(d) {
			    		return yLine(d.value)-10;
			    })
			.text(function(d) {
			    		return d.value + "%";
			    });




	 	lineChart.selectAll()
		 	.data(lineYear)
		 	.enter()
		 	.append("text")
			.attr("x", function(d) {
					return (xLine(d.Period))-10;
			    })
			    .attr("y", function(d) {
			    		return yLine(100)-30;
			    })
			.text(function(d) {
			    		return d.value;
			    })

	    	.style("font-weight", 700);
    }
}