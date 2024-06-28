<?php

namespace App\Http\Requests;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ShellLinkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'uri' => [
                'required',
                'string',
                'url:https',
                new class implements ValidationRule {

                    public function validate(string $attribute, mixed $value, Closure $fail): void
                    {
                        $whitelist = config('shell-whitelist');

                        if (!in_array(parse_url($value, PHP_URL_HOST), $whitelist)) {
                            $fail('The :attribute must be a valid URL from the whitelist.');
                        }
                    }
                },
            ],
        ];
    }
}
