<script type="text/javascript"> 
    var adfly_id = 19398134; 
    var popunder_frequency_delay = 0; 
</script> 
<script src="https://cdn.adf.ly/js/display.js"></script> 

<?php 
$http_header           = 'http://';
if (!empty($_SERVER['HTTPS'])) {
    $http_header = 'https://';
}
$this_url   = $http_header . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

$this_url = str_replace('admin-panel', 'admin-cp', $this_url);
header("Location: $this_url");
exit();
?>
You can access the admin panel, from <a href="<?php echo $this_url ?>"><?php echo $this_url ?></a>