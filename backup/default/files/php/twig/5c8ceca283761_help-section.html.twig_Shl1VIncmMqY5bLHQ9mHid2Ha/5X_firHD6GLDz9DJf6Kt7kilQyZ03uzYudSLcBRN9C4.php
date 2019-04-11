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

/* core/themes/classy/templates/misc/help-section.html.twig */
class __TwigTemplate_de67bdabee5a4717ab0095c7924d1f5b198432e3e14d74664ee5dd670da71e80 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 18, "set" => 20, "for" => 27];
        $filters = ["length" => 20];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set', 'for'],
                ['length'],
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
        // line 15
        echo "<div class=\"clearfix\">
  <h2>";
        // line 16
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
        echo "</h2>
  <p>";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["description"] ?? null)), "html", null, true);
        echo "</p>
  ";
        // line 18
        if (($context["links"] ?? null)) {
            // line 19
            echo "    ";
            // line 20
            echo "    ";
            $context["size"] = (int) floor((twig_length_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["links"] ?? null))) / 4));
            // line 21
            echo "    ";
            if (((($context["size"] ?? null) * 4) < twig_length_filter($this->env, ($context["links"] ?? null)))) {
                // line 22
                echo "      ";
                $context["size"] = (($context["size"] ?? null) + 1);
                // line 23
                echo "    ";
            }
            // line 24
            echo "
    ";
            // line 26
            echo "    ";
            $context["count"] = 0;
            // line 27
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["links"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["link"]) {
                // line 28
                echo "      ";
                if ((($context["count"] ?? null) == 0)) {
                    // line 29
                    echo "        ";
                    // line 30
                    echo "        <div class=\"layout-column layout-column--quarter\"><ul>
      ";
                }
                // line 32
                echo "      <li>";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["link"]), "html", null, true);
                echo "</li>
      ";
                // line 33
                $context["count"] = (($context["count"] ?? null) + 1);
                // line 34
                echo "      ";
                if ((($context["count"] ?? null) >= ($context["size"] ?? null))) {
                    // line 35
                    echo "        ";
                    // line 36
                    echo "        ";
                    $context["count"] = 0;
                    // line 37
                    echo "        </ul></div>
      ";
                }
                // line 39
                echo "    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['link'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 40
            echo "
    ";
            // line 42
            echo "    ";
            if ((($context["count"] ?? null) > 0)) {
                // line 43
                echo "      </ul></div>
    ";
            }
            // line 45
            echo "  ";
        } else {
            // line 46
            echo "    <p>";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["empty"] ?? null)), "html", null, true);
            echo "</p>
  ";
        }
        // line 48
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "core/themes/classy/templates/misc/help-section.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  146 => 48,  140 => 46,  137 => 45,  133 => 43,  130 => 42,  127 => 40,  121 => 39,  117 => 37,  114 => 36,  112 => 35,  109 => 34,  107 => 33,  102 => 32,  98 => 30,  96 => 29,  93 => 28,  88 => 27,  85 => 26,  82 => 24,  79 => 23,  76 => 22,  73 => 21,  70 => 20,  68 => 19,  66 => 18,  62 => 17,  58 => 16,  55 => 15,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/classy/templates/misc/help-section.html.twig", "/Users/jwilkins/Sites/umami/web/core/themes/classy/templates/misc/help-section.html.twig");
    }
}
