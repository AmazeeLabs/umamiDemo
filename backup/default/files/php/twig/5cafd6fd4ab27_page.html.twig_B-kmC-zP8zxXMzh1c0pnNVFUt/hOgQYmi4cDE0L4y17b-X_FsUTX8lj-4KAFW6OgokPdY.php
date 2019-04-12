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

/* core/profiles/demo_umami/themes/umami/templates/layout/page.html.twig */
class __TwigTemplate_4a109e700d6392f25f95465e7a876fc53da267156ca923fc898b4f6be58326e9 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 47];
        $filters = ["trim" => 47, "striptags" => 47, "render" => 47];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['trim', 'striptags', 'render'],
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
        // line 45
        echo "<div class=\"layout-container\">

  ";
        // line 47
        if (( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "pre_header", []))))) ||  !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(        // line 48
($context["page"] ?? null), "header", []))))))) {
            // line 49
            echo "    <header class=\"layout-header\" role=\"banner\">
      <div class=\"container\">
        ";
            // line 51
            if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "pre_header", [])))))) {
                // line 52
                echo "          ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "pre_header", [])), "html", null, true);
                echo "
        ";
            }
            // line 54
            echo "        ";
            if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "header", [])))))) {
                // line 55
                echo "          ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
                echo "
        ";
            }
            // line 57
            echo "      </div>
    </header>
  ";
        }
        // line 60
        echo "

  <div class=\"layout-highlighted\">
    ";
        // line 63
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
        echo "
  </div>


  ";
        // line 67
        if ($this->getAttribute(($context["page"] ?? null), "tabs", [])) {
            // line 68
            echo "  <div class=\"layout-tabs\">
    <div class=\"container\">
      ";
            // line 70
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "tabs", [])), "html", null, true);
            echo "
    </div>
  </div>
  ";
        }
        // line 74
        echo "
  ";
        // line 75
        if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "banner_top", [])))))) {
            // line 76
            echo "    <div class=\"layout-banner-top\">
      ";
            // line 77
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "banner_top", [])), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 80
        echo "
  ";
        // line 81
        if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "breadcrumbs", [])))))) {
            // line 82
            echo "  <div class=\"layout-breadcrumbs\">
    <div class=\"container\">
      ";
            // line 84
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "breadcrumbs", [])), "html", null, true);
            echo "
    </div>
  </div>
  ";
        }
        // line 88
        echo "
  ";
        // line 89
        if ( !($context["node"] ?? null)) {
            // line 90
            echo "    ";
            if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "page_title", [])))))) {
                // line 91
                echo "      <div class=\"layout-page-title\">
        ";
                // line 92
                if (($context["is_front"] ?? null)) {
                    // line 93
                    echo "          <div class=\"is-front container\">
            ";
                    // line 94
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "page_title", [])), "html", null, true);
                    echo "
          </div>
          ";
                } else {
                    // line 97
                    echo "          <div class=\"container\">
            ";
                    // line 98
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "page_title", [])), "html", null, true);
                    echo "
          </div>
        ";
                }
                // line 101
                echo "      </div>
    ";
            }
            // line 103
            echo "  ";
        }
        // line 104
        echo "
  <main role=\"main\" class=\"main container\">

    <div class=\"layout-content\">
      <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 109
        echo "      ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
    </div>";
        // line 111
        echo "
    ";
        // line 112
        if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "sidebar", [])))))) {
            // line 113
            echo "      <aside class=\"layout-sidebar\" role=\"complementary\">
        ";
            // line 114
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar", [])), "html", null, true);
            echo "
      </aside>
    ";
        }
        // line 117
        echo "
  </main>

  ";
        // line 120
        if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "content_bottom", [])))))) {
            // line 121
            echo "    <div class=\"layout-content-bottom\">
      ";
            // line 122
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content_bottom", [])), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 125
        echo "
  ";
        // line 126
        if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "footer", [])))))) {
            // line 127
            echo "  <div class=\"layout-footer\">
    <footer class=\"footer\" role=\"contentinfo\">
      <div class=\"container\">
        ";
            // line 130
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer", [])), "html", null, true);
            echo "
      </div>
    </footer>
  </div>
  ";
        }
        // line 135
        echo "
  ";
        // line 136
        if ( !twig_test_empty(twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "bottom", [])))))) {
            // line 137
            echo "    <div class=\"layout-bottom\">
      <div class=\"container\">
        ";
            // line 139
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "bottom", [])), "html", null, true);
            echo "
      </div>
    </div>
  ";
        }
        // line 143
        echo "
</div>";
    }

    public function getTemplateName()
    {
        return "core/profiles/demo_umami/themes/umami/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  256 => 143,  249 => 139,  245 => 137,  243 => 136,  240 => 135,  232 => 130,  227 => 127,  225 => 126,  222 => 125,  216 => 122,  213 => 121,  211 => 120,  206 => 117,  200 => 114,  197 => 113,  195 => 112,  192 => 111,  187 => 109,  181 => 104,  178 => 103,  174 => 101,  168 => 98,  165 => 97,  159 => 94,  156 => 93,  154 => 92,  151 => 91,  148 => 90,  146 => 89,  143 => 88,  136 => 84,  132 => 82,  130 => 81,  127 => 80,  121 => 77,  118 => 76,  116 => 75,  113 => 74,  106 => 70,  102 => 68,  100 => 67,  93 => 63,  88 => 60,  83 => 57,  77 => 55,  74 => 54,  68 => 52,  66 => 51,  62 => 49,  60 => 48,  59 => 47,  55 => 45,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/profiles/demo_umami/themes/umami/templates/layout/page.html.twig", "/Users/jwilkins/Sites/umami/web/core/profiles/demo_umami/themes/umami/templates/layout/page.html.twig");
    }
}
