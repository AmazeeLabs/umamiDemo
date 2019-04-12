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

/* core/themes/stable/templates/admin/views-ui-expose-filter-form.html.twig */
class __TwigTemplate_65474408d2d05bcd8ca362d00863dfd342bfa7a68be8a3714a1757f3d5d0c16a extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 30, "set" => 40];
        $filters = ["without" => 40];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
                ['without'],
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
        // line 20
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "form_description", [])), "html", null, true);
        echo "
";
        // line 21
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "expose_button", [])), "html", null, true);
        echo "
";
        // line 22
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "group_button", [])), "html", null, true);
        echo "
";
        // line 23
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "required", [])), "html", null, true);
        echo "
";
        // line 24
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "label", [])), "html", null, true);
        echo "
";
        // line 25
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "description", [])), "html", null, true);
        echo "

";
        // line 27
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "operator", [])), "html", null, true);
        echo "
";
        // line 28
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "value", [])), "html", null, true);
        echo "

";
        // line 30
        if ($this->getAttribute(($context["form"] ?? null), "use_operator", [])) {
            // line 31
            echo "  <div class=\"views-left-40\">
  ";
            // line 32
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "use_operator", [])), "html", null, true);
            echo "
  </div>
";
        }
        // line 35
        echo "
";
        // line 40
        $context["remaining_form"] = twig_without($this->sandbox->ensureToStringAllowed(($context["form"] ?? null)), "form_description", "expose_button", "group_button", "required", "label", "description", "operator", "value", "use_operator", "more");
        // line 53
        echo "
";
        // line 57
        if ($this->getAttribute($this->getAttribute(($context["form"] ?? null), "operator", []), "#type", [], "array")) {
            // line 58
            echo "  <div class=\"views-right-60\">
  ";
            // line 59
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["remaining_form"] ?? null)), "html", null, true);
            echo "
  </div>
";
        } else {
            // line 62
            echo "  ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["remaining_form"] ?? null)), "html", null, true);
            echo "
";
        }
        // line 64
        echo "
";
        // line 65
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["form"] ?? null), "more", [])), "html", null, true);
        echo "
";
    }

    public function getTemplateName()
    {
        return "core/themes/stable/templates/admin/views-ui-expose-filter-form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 65,  125 => 64,  119 => 62,  113 => 59,  110 => 58,  108 => 57,  105 => 53,  103 => 40,  100 => 35,  94 => 32,  91 => 31,  89 => 30,  84 => 28,  80 => 27,  75 => 25,  71 => 24,  67 => 23,  63 => 22,  59 => 21,  55 => 20,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/stable/templates/admin/views-ui-expose-filter-form.html.twig", "/Users/jwilkins/Sites/umami/web/core/themes/stable/templates/admin/views-ui-expose-filter-form.html.twig");
    }
}
