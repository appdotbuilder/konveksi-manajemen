<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:50|unique:products,code,' . $this->route('product')->id,
            'category' => 'required|in:uniform,batik,shirt,jacket,vest,pants,accessories',
            'description' => 'nullable|string',
            'base_price' => 'required|numeric|min:0',
            'custom_sizing' => 'boolean',
            'materials' => 'nullable|array',
            'colors' => 'nullable|array',
            'status' => 'in:active,inactive',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Product name is required.',
            'code.required' => 'Product code is required.',
            'code.unique' => 'This product code is already in use.',
            'category.required' => 'Product category is required.',
            'base_price.required' => 'Base price is required.',
            'base_price.numeric' => 'Base price must be a number.',
        ];
    }
}