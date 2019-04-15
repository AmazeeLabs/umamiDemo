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

/* core/profiles/demo_umami/themes/umami/templates/components/navigation/block--umami-main-menu.html.twig */
class __TwigTemplate_cd181c58aad36a3868c7432a9e913e392df8b34a98ff153c08658d5d0de3a41c extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 35, "include" => 44, "if" => 50, "block" => 58];
        $filters = ["clean_class" => 39, "clean_id" => 47, "escape" => 48, "without" => 48];
        $functions = ["active_theme_path" => 44];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'include', 'if', 'block'],
                ['clean_class', 'clean_id', 'escape', 'without'],
                ['active_theme_path']
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
        // line 35
        $context["classes"] = [0 => "block", 1 => "block-menu", 2 => "navigation", 3 => (("menu-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 39
($context["derivative_plugin_id"] ?? null)))) . "__wrapper")];
        // line 42
        echo "
<div class=\"menu-main-togglewrap\">
  <button type=\"button\" name=\"menu_toggle\" class=\"menu-main-toggle\" data-drupal-selector=\"menu-main-toggle\" aria-label=\"Toggle the menu\">";
        // line 44
        $this->loadTemplate(($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getActiveThemePath() . "/images/svg/menu-icon.svg"), "core/profiles/demo_umami/themes/umami/templates/components/navigation/block--umami-main-menu.html.twig", 44)->display($context);
        echo "</button>
</div>

";
        // line 47
        $context["heading_id"] = ($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "id", [])) . \Drupal\Component\Utility\Html::getId("-menu"));
        // line 48
        echo "<nav role=\"navigation\" aria-labelledby=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading_id"] ?? null)), "html", null, true);
        echo "\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->withoutFilter($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "role", "aria-labelledby"), "html", null, true);
        echo ">
  ";
        // line 50
        echo "  ";
        if ( !$this->getAttribute(($context["configuration"] ?? null), "label_display", [])) {
            // line 51
            echo "    ";
            $context["title_attributes"] = $this->getAttribute(($context["title_attributes"] ?? null), "addClass", [0 => "visually-hidden"], "method");
            // line 52
            echo "  ";
        }
        // line 53
        echo "  ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null)), "html", null, true);
        echo "
  <h2";
        // line 54
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["title_attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["heading_id"] ?? null)], "method")), "html", null, true);
        echo ">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["configuration"] ?? null), "label", [])), "html", null, true);
        echo "</h2>
  ";
        // line 55
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null)), "html", null, true);
        echo "

  ";
        // line 58
        echo "  ";
        $this->displayBlock('content', $context, $blocks);
        // line 61
        echo "</nav>
";
    }

    // line 58
    public function block_content($context, array $blocks = [])
    {
        // line 59
        echo "    ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo "
  ";
    }

    public function getTemplateName()
    {
        return "core/profiles/demo_umami/themes/umami/templates/components/navigation/block--umami-main-menu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  114 => 59,  111 => 58,  106 => 61,  103 => 58,  98 => 55,  92 => 54,  87 => 53,  84 => 52,  81 => 51,  78 => 50,  71 => 48,  69 => 47,  63 => 44,  59 => 42,  57 => 39,  56 => 35,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/profiles/demo_umami/themes/umami/templates/components/navigation/block--umami-main-menu.html.twig", "/Users/jwilkins/Sites/umami/web/core/profiles/demo_umami/themes/umami/templates/components/navigation/block--umami-main-menu.html.twig");
    }
}
