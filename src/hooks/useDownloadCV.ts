import CVFile from "@/assets/CV_DiogoAdao_BiomedicalEngineer.pdf"

export const useDownloadCV = () => {
  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = CVFile // o import retorna a URL do arquivo processado pelo bundler
    link.download = "CV_DiogoAdao_BiomedicalEngineer.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return { downloadCV }
}

