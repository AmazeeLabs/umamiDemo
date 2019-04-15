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

/* core/themes/stable/templates/admin/system-modules-details.html.twig */
class __TwigTemplate_dc25fe5479b400d9452ba1b967b4e5c6e5260529a42bbead9c4f3cfe33ce7186 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 34, "set" => 35, "if" => 50];
        $filters = ["t" => 28, "escape" => 36];
        $functions = ["cycle" => 35];

        try {
            $this->sandbox->checkSecurity(
                ['for', 'set', 'if'],
                ['t', 'escape'],
                ['cycle']
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
        // line 25
        echo "<table class=\"responsive-enabled\" data-striping=\"1\">
  <thead>
    <tr>
      <th class=\"checkbox visually-hidden\">";
        // line 28
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Installed"));
        echo "</th>
      <th class=\"name visually-hidden\">";
        // line 29
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Name"));
        echo "</th>
      <th class=\"description visually-hidden priority-low\">";
        // line 30
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Description"));
        echo "</th>
    </tr>
  </thead>
  <tbody>
    ";
        // line 34
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["modules"] ?? null));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["module"]) {
            // line 35
            echo "      ";
            $context["zebra"] = twig_cycle([0 => "odd", 1 => "even"], $this->sandbox->ensureToStringAllowed($this->getAttribute($context["loop"], "index0", [])));
            // line 36
            echo "      <tr";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["module"], "attributes", []), "addClass", [0 => ($context["zebra"] ?? null)], "method")), "html", null, true);
            echo ">
        <td class=\"checkbox\">
          ";
            // line 38
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["module"], "checkbox", [])), "html", null, true);
            echo "
        </td>
        <td class=\"module\">
          <label id=\"";
            // line 41
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["module"], "id", [])), "html", null, true);
            echo "\" for=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["module"], "enable_id", [])), "html", null, true);
            echo "\" class=\"module-name table-filter-text-source\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["module"], "name", [])), "html", null, true);
            echo "</label>
        </td>
        <td class=\"description expand priority-low\">
          <details class=\"js-form-wrapper form-wrapper\" id=\"";
            // line 44
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["module"], "enable_id", [])), "html", null, true);
            echo "-description\">
            <summary aria-controls=\"";
            // line 45
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["module"], "enable_id", [])), "html", null, true);
            echo "-description\" role=\"button\" aria-expanded=\"false\"><span class=\"text module-description\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["module"], "description", [])), "html", null, true);
            echo "</span></summary>
            <div class=\"details-wrapper\">
              <div class=\"details-description\">
                <div class=\"requirements\">
                  <div class=\"admin-requirements\">";
            // line 49
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Machine name: <span dir=\"ltr\" class=\"table-filter-text-source\">@machine-name</span>", ["@machine-name" => $this->getAttribute($context["module"], "machine_name", [])]));
            echo "</div>
                  ";
            // line 50
            if ($this->getAttribute($context["module"], "version", [])) {
                // line 51
                echo "                    <div class=\"admin-requirements\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Version: @module-version", ["@module-version" => $this->getAttribute($context["module"], "version", [])]));
                echo "</div>
                  ";
            }
            // line 53
            echo "                  ";
            if ($this->getAttribute($context["module"], "requires", [])) {
                // line 54
                echo "                    <div class=\"admin-requirements\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Requires: @module-list", ["@module-list" => $this->getAttribute($context["module"], "requires", [])]));
                echo "</div>
                  ";
            }
            // line 56
            echo "                  ";
            if ($this->getAttribute($context["module"], "required_by", [])) {
                // line 57
                echo "                    <div class=\"admin-requirements\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Required by: @module-list", ["@module-list" => $this->getAttribute($context["module"], "required_by", [])]));
                echo "</div>
                  ";
            }
            // line 59
            echo "                </div>
                ";
            // line 60
            if ($this->getAttribute($context["module"], "links", [])) {
                // line 61
                echo "                  <div class=\"links\">
                    ";
                // line 62
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable([0 => "help", 1 => "permissions", 2 => "configure"]);
                foreach ($context['_seq'] as $context["_key"] => $context["link_type"]) {
                    // line 63
                    echo "                      ";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["module"], "links", []), $context["link_type"], [], "array")), "html", null, true);
                    echo "
                    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['link_type'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 65
                echo "                  </div>
                ";
            }
            // line 67
            echo "              </div>
            </div>
          </details>
        </td>
      </tr>
    ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['module'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 73
        echo "  </tbody>
</table>
";
    }

    public function getTemplateName()
    {
        return "core/themes/stable/templates/admin/system-modules-details.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  204 => 73,  185 => 67,  181 => 65,  172 => 63,  168 => 62,  165 => 61,  163 => 60,  160 => 59,  154 => 57,  151 => 56,  145 => 54,  142 => 53,  136 => 51,  134 => 50,  130 => 49,  121 => 45,  117 => 44,  107 => 41,  101 => 38,  95 => 36,  92 => 35,  75 => 34,  68 => 30,  64 => 29,  60 => 28,  55 => 25,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/stable/templates/admin/system-modules-details.html.twig", "/Users/jwilkins/Sites/umami/web/core/themes/stable/templates/admin/system-modules-details.html.twig");
    }
}
