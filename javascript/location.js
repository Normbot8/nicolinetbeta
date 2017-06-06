function locateLocation(response) {
    $("#address").html("Thank you for visiting from " + response.city + ", " + response.region_name + "!");
    $('#latlong').html("For your information (and also to freak you out further): Yer Latitude: " + response.latitude + " Yer Longitude: " + response.longitude);
};
