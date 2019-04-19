<?php 

define('MAIN_PATCH',get_template_directory_uri());
define('PATCH_ST1','/assets/style/bootstrap.min.css');
define('PATCH_ST2','/assets/style/style.css');
  


define('MAIN_PATCH',get_template_directory_uri());
define('PATCH_SC1','/assets/js/script.js');




#action
add_action('wp_enqueue_scripts','add_styles');#Добавляет стили 
add_action('wp_enqueue_scripts','add_scripts');#Добавляет скрипты
add_action('after_setup_theme', "add_menu");
add_action( 'widgets_init', 'add_sidebar' );
add_action( 'init', 'register_faq_post_type' );




function add_styles() {

    wp_enqueue_style('st1',MAIN_PATCH . PATCH_ST1);
    wp_enqueue_style('st2',MAIN_PATCH . PATCH_ST2);
 
}

function add_scripts(){

	wp_deregister_script('jquery');#удаялет дефолтную библиотеку JQ

	wp_register_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');#регистрирует новую
	wp_enqueue_script( 'jquery' );# загружает ее
    
    
    wp_enqueue_script('script',MAIN_PATCH . PATCH_SC1 , array('jquery'),null,true );
    
}


function add_menu(){
    
   
    
    add_theme_support( 'post-thumbnails', array( 'post','portfolio') );
    add_theme_support( 'post-formats', array( 'video', 'aside' ) );
    add_image_size( 'post-thumb',1300, 600, true );
    add_image_size( 'Portfolio',600,626, true );
   
}








































