<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/profiles/demo_umami/themes/umami/images/svg/menu-icon.svg */
class __TwigTemplate_c2fbff14128fefd6c43f7db8897e8527bd49ebbd272dc3e018d189169b831795 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = [];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<svg width=\"23\" height=\"23\" viewBox=\"0 0 23 23\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-labelledby=\"menu-toggle-title menu-toggle-desc\"><title id=\"menu-toggle-title\">Menu toggle icon</title><desc id=\"menu-toggle-desc\">Hamburger icon for menu toggle.</desc><use xlink:href=\"#a\" fill=\"#5F635D\"/><use xlink:href=\"#a\" transform=\"translate(0 18)\" fill=\"#5F635D\"/><use xlink:href=\"#a\" transform=\"translate(0 9)\" fill=\"#5F635D\"/><defs><path id=\"a\" fill-rule=\"evenodd\" d=\"M0 0h23v5H0V0z\"/></defs></svg>
";
    }

    public function getTemplateName()
    {
        return "core/profiles/demo_umami/themes/umami/images/svg/menu-icon.svg";
    }

    public function getDebugInfo()
    {
        return array (  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/profiles/demo_umami/themes/umami/images/svg/menu-icon.svg", "/Users/jwilkins/Sites/umami/web/core/profiles/demo_umami/themes/umami/images/svg/menu-icon.svg");
    }
}
