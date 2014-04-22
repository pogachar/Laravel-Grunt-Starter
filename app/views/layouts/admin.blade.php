<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Admin Panel | {{-- $pageTitle --}}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{ HTML::style('css/backend.css') }}

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src='{{ URL::to('js/vendor/html5shiv.js') }}'><\/script>')</script>
        <![endif]-->
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div class="header-container">
            <header class="wrapper clearfix">
                <h1 class="title">Admin Panel</h1>
                <nav>
                    <ul>
                        <li><a href="#">Nav link 1</a></li>
                        <li><a href="#">Nav link 2</a></li>
                        <li><a href="#">Nav link 3</a></li>
                    </ul>
                </nav>
            </header>
        </div>

        <div class="main-container">
            @if(Session::has('message'))
                <p class="message">{{ Session::get('message') }}</p>
            @endif
            
            <div class="main wrapper clearfix">
                <aside>
                    <h3>aside</h3>
                    @yield('aside')

                </aside>
                
                <article>
                    <h3>content</h3>
                    @yield('content')

                </article>
            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper">
                <h3>footer</h3>
            </footer>
        </div>
        
        {{ HTML::script('js/scripts.js') }}
    </body>
</html>
