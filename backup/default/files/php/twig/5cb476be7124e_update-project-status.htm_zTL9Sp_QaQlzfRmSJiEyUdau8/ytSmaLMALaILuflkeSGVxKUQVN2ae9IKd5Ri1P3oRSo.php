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

/* core/themes/stable/templates/admin/update-project-status.html.twig */
class __TwigTemplate_b5caded119371ed4bb9a442483656d500ac2861bd0d2a259521c26757132ff9f extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 29, "if" => 38, "for" => 61, "trans" => 88];
        $filters = ["escape" => 37, "join" => 83, "t" => 85, "placeholder" => 89];
        $functions = ["constant" => 30];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for', 'trans'],
                ['escape', 'join', 't', 'placeholder'],
                ['constant']
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
        // line 29
        $context["status_classes"] = [0 => ((($this->getAttribute(        // line 30
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_NOT_SECURE"))) ? ("project-update__status--security-error") : ("")), 1 => ((($this->getAttribute(        // line 31
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_REVOKED"))) ? ("project-update__status--revoked") : ("")), 2 => ((($this->getAttribute(        // line 32
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_NOT_SUPPORTED"))) ? ("project-update__status--not-supported") : ("")), 3 => ((($this->getAttribute(        // line 33
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_NOT_CURRENT"))) ? ("project-update__status--not-current") : ("")), 4 => ((($this->getAttribute(        // line 34
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_CURRENT"))) ? ("project-update__status--current") : (""))];
        // line 37
        echo "<div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["status"] ?? null), "attributes", []), "addClass", [0 => "project-update__status", 1 => ($context["status_classes"] ?? null)], "method")), "html", null, true);
        echo ">";
        // line 38
        if ($this->getAttribute(($context["status"] ?? null), "label", [])) {
            // line 39
            echo "<span>";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["status"] ?? null), "label", [])), "html", null, true);
            echo "</span>";
        } else {
            // line 41
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["status"] ?? null), "reason", [])), "html", null, true);
        }
        // line 43
        echo "  <span class=\"project-update__status-icon\">
    ";
        // line 44
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["status"] ?? null), "icon", [])), "html", null, true);
        echo "
  </span>
</div>

<div class=\"project-update__title\">";
        // line 49
        if (($context["url"] ?? null)) {
            // line 50
            echo "<a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
            echo "</a>";
        } else {
            // line 52
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
        }
        // line 54
        echo "  ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["existing_version"] ?? null)), "html", null, true);
        echo "
  ";
        // line 55
        if (((($context["install_type"] ?? null) == "dev") && ($context["datestamp"] ?? null))) {
            // line 56
            echo "    <span class=\"project-update__version-date\">(";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["datestamp"] ?? null)), "html", null, true);
            echo ")</span>
  ";
        }
        // line 58
        echo "</div>

";
        // line 60
        if (($context["versions"] ?? null)) {
            // line 61
            echo "  ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["versions"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["version"]) {
                // line 62
                echo "    ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["version"]), "html", null, true);
                echo "
  ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['version'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        // line 65
        echo "
";
        // line 67
        $context["extra_classes"] = [0 => ((($this->getAttribute(        // line 68
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_NOT_SECURE"))) ? ("project-not-secure") : ("")), 1 => ((($this->getAttribute(        // line 69
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_REVOKED"))) ? ("project-revoked") : ("")), 2 => ((($this->getAttribute(        // line 70
($context["project"] ?? null), "status", []) == twig_constant("UPDATE_NOT_SUPPORTED"))) ? ("project-not-supported") : (""))];
        // line 73
        echo "<div class=\"project-updates__details\">
  ";
        // line 74
        if (($context["extras"] ?? null)) {
            // line 75
            echo "    <div class=\"extra\">
      ";
            // line 76
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["extras"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["extra"]) {
                // line 77
                echo "        <div";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["extra"], "attributes", []), "addClass", [0 => ($context["extra_classes"] ?? null)], "method")), "html", null, true);
                echo ">
          ";
                // line 78
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["extra"], "label", [])), "html", null, true);
                echo ": ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["extra"], "data", [])), "html", null, true);
                echo "
        </div>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['extra'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 81
            echo "    </div>
  ";
        }
        // line 83
        echo "  ";
        $context["includes"] = twig_join_filter($this->sandbox->ensureToStringAllowed(($context["includes"] ?? null)), ", ");
        // line 84
        echo "  ";
        if (($context["disabled"] ?? null)) {
            // line 85
            echo "    ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Includes:"));
            echo "
    <ul>
      <li>
        ";
            // line 88
            echo t("Enabled: %includes", array("%includes" =>             // line 89
($context["includes"] ?? null), ));
            // line 91
            echo "      </li>
      <li>
        ";
            // line 93
            $context["disabled"] = twig_join_filter($this->sandbox->ensureToStringAllowed(($context["disabled"] ?? null)), ", ");
            // line 94
            echo "        ";
            echo t("Disabled: %disabled", array("%disabled" =>             // line 95
($context["disabled"] ?? null), ));
            // line 97
            echo "      </li>
    </ul>
  ";
        } else {
            // line 100
            echo "    ";
            echo t("Includes: %includes", array("%includes" =>             // line 101
($context["includes"] ?? null), ));
            // line 103
            echo "  ";
        }
        // line 104
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "core/themes/stable/templates/admin/update-project-status.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  210 => 104,  207 => 103,  205 => 101,  203 => 100,  198 => 97,  196 => 95,  194 => 94,  192 => 93,  188 => 91,  186 => 89,  185 => 88,  178 => 85,  175 => 84,  172 => 83,  168 => 81,  157 => 78,  152 => 77,  148 => 76,  145 => 75,  143 => 74,  140 => 73,  138 => 70,  137 => 69,  136 => 68,  135 => 67,  132 => 65,  122 => 62,  117 => 61,  115 => 60,  111 => 58,  105 => 56,  103 => 55,  98 => 54,  95 => 52,  88 => 50,  86 => 49,  79 => 44,  76 => 43,  73 => 41,  68 => 39,  66 => 38,  62 => 37,  60 => 34,  59 => 33,  58 => 32,  57 => 31,  56 => 30,  55 => 29,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/stable/templates/admin/update-project-status.html.twig", "/Users/jwilkins/Sites/umami/web/core/themes/stable/templates/admin/update-project-status.html.twig");
    }
}
