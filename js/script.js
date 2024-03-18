// Copyright (c) 2024 Fetuha All rights reserved
//
// Created by: Fetuha
// Created on: March 2024
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  var w = 5
  var l = 3
  document.getElementById("area-answer").innerHTML += (l * w) + " cm<sup>2" 
  document.getElementById("perimeter-answer").innerHTML += 2 * (l + w) + " cm" 
}
