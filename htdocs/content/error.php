<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once "../modules/handler.php" ?>
    <title>Error | Abscissa</title>
    <meta name="description" content="Abscissa error page.">
    <meta name="keywords" content="abscissa error">
    <!-- HEAD MODULES -->
    <?php add("analytics") ?>
    <?php add("settings") ?>
    <!-- STYLE -->
    <link rel="stylesheet/less" type="text/css" href="../style/error.less">
</head>
<body>
    <!-- WORKING MODULES -->
    <?php add("less") ?>
    <!-- UI MODULES -->
    <?php add("navbar") ?>
    <?php add("user") ?>
    <!-- MAIN -->
    <div id="main">
        <h2>Error.</h2>
        <p>This doesn't look right at all.</p>
        <p>Try going back.</p>
    </div>
    <!-- SCRIPT -->
    <script src="../script/error.js"></script>
</body>
</html>