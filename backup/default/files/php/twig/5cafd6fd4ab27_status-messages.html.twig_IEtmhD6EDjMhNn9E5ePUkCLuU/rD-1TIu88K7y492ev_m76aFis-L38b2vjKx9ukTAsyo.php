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

/* core/profiles/demo_umami/themes/umami/templates/components/messages/status-messages.html.twig */
class __TwigTemplate_1fb2ceae7e69c2297110ad71855de0f728bc1cc59f7d364442e2cc35dd20c283 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'messages' => [$this, 'block_messages'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["block" => 22, "for" => 23, "set" => 25, "if" => 32];
        $filters = ["without" => 30, "length" => 38, "first" => 45];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['block', 'for', 'set', 'if'],
                ['without', 'length', 'first'],
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
        // line 22
        $this->displayBlock('messages', $context, $blocks);
    }

    public function block_messages($context, array $blocks = [])
    {
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["message_list"] ?? null));
        foreach ($context['_seq'] as $context["type"] => $context["messages"]) {
            // line 24
            echo "  ";
            // line 25
            $context["classes"] = [0 => "messages", 1 => ("messages--" . $this->sandbox->ensureToStringAllowed(            // line 27
$context["type"]))];
            // line 30
            echo "  <div role=\"contentinfo\" aria-label=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["status_headings"] ?? null), $context["type"], [], "array")), "html", null, true);
            echo "\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "role", "aria-label"), "html", null, true);
            echo ">
    <div class=\"messages__content container\">
      ";
            // line 32
            if (($context["type"] == "error")) {
                // line 33
                echo "        <div role=\"alert\">
      ";
            }
            // line 35
            echo "        ";
            if ($this->getAttribute(($context["status_headings"] ?? null), $context["type"], [], "array")) {
                // line 36
                echo "          <h2 class=\"visually-hidden\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["status_headings"] ?? null), $context["type"], [], "array")), "html", null, true);
                echo "</h2>
        ";
            }
            // line 38
            echo "        ";
            if ((twig_length_filter($this->env, $context["messages"]) > 1)) {
                // line 39
                echo "          <ul class=\"messages__list\">
            ";
                // line 40
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($context["messages"]);
                foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
                    // line 41
                    echo "              <li class=\"messages__item\">";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["message"]), "html", null, true);
                    echo "</li>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 43
                echo "          </ul>
        ";
            } else {
                // line 45
                echo "          <span class=\"messages__item\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_first($this->env, $this->sandbox->ensureToStringAllowed($context["messages"])), "html", null, true);
                echo "</span>
        ";
            }
            // line 47
            echo "      ";
            if (($context["type"] == "error")) {
                // line 48
                echo "        </div>
      ";
            }
            // line 50
            echo "    </div>
  </div>
  ";
            // line 53
            echo "  ";
            $context["attributes"] = $this->getAttribute(($context["attributes"] ?? null), "removeClass", [0 => ($context["classes"] ?? null)], "method");
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['type'], $context['messages'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "core/profiles/demo_umami/themes/umami/templates/components/messages/status-messages.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  134 => 53,  130 => 50,  126 => 48,  123 => 47,  117 => 45,  113 => 43,  104 => 41,  100 => 40,  97 => 39,  94 => 38,  88 => 36,  85 => 35,  81 => 33,  79 => 32,  71 => 30,  69 => 27,  68 => 25,  66 => 24,  62 => 23,  56 => 22,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "core/profiles/demo_umami/themes/umami/templates/components/messages/status-messages.html.twig", "/Users/jwilkins/Sites/umami/web/core/profiles/demo_umami/themes/umami/templates/components/messages/status-messages.html.twig");
    }
}
