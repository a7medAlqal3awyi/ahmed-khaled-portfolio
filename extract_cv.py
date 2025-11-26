import fitz  # PyMuPDF

pdf_path = "Ahmed-Khaled-Flutter-Dev.pdf"
doc = fitz.open(pdf_path)

full_text = ""
for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    full_text += f"\n--- PAGE {page_num + 1} ---\n{text}\n"

print(full_text)
doc.close()
