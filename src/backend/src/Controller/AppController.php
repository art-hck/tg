<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Swagger\Annotations as SWG;

class AppController extends AbstractController
{
    /**
     * @SWG\Response(response=200, description="Returns team")
     * @SWG\Tag(name="Team")
     * @Route("/app/{name}", methods={"GET"})
     *
     * @param string $name
     * @return JsonResponse
     */
    public function findByName(string $name)
    {
        return new JsonResponse(["200" => "OK", $name]);
    }

}